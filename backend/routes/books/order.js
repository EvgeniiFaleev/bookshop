const {Router} = require("express");
const router = Router();
const {body, validationResult} = require('express-validator');
const Order = require("../../models/order");
const Book = require("../../models/book");
const express = require('express');
const adminCheck = require("../../common/adminCheck");


router.get("/orders", adminCheck, async (req, res) => {
  try {
    const options = {
      page: req.query.page,
    };
    const result = await Order.paginate({}, options);

    return res.json({
      orders: result.docs
    })
  } catch (e) {
    console.error(e);
    return  res.status(500).json({message: "Чтото пошло не так "})
  }
});

router.post("/buy",express.json(),
  [body("orderList", "Список заказов пуст").exists().isLength({
    min: 1,
    max: 20
  }), body('address', "Введите адрес").exists(),
    body('phoneNumber', "Введите номер телефона").exists(),
    body('name', "Введите ФИО").exists()],
  async (req, res) => {
    try {
      console.log("BODY " + req.body)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некоректные данные при вхоже"
        });
      }
      const {orderList, address, phoneNumber, name} = req.body;

      const books = await Promise.all(orderList.map(async (item) => {
        const match = await Book.findById(item.id);
        if (!match) {
          return res.status(500).json({
            message: `Такой книги не существует ${match.title}`
          });
        }
        const book = {
          id:match.id,
          author:match.author,
          title: match.title,
          price: match.price,
          count: item.count
        };
        console.log(book);
        return book;
      }));

      const total = books.reduce((acc, item) => {
        acc.count = acc.count + Number(item.count);
        acc.price = acc.price + Number(item.price)*(+item.count);
        return acc;
      },{count: 0, price: 0});

      const newOrder = new Order({
        orderList: books,
        name,
        phoneNumber,
        address,
        totalCount: total.count,
        totalPrice: total.price
      });

      newOrder.save(function (err) {
        if (err) {
          return res.status(500)
            .json(`Ошибка при сохранении в базу ${err}`);
        }
        return res.status(200).json({message: "Заказ сохранен"})
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });



module.exports = router;
