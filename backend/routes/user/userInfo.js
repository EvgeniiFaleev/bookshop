const {Router} = require("express");
const User = require("../../models/user");
const Book = require('../../models/book');
const Order = require('../../models/order');
const router = Router();
const {body, validationResult} = require('express-validator');
const express = require('express');
const userCheck = require("../../common/userCheck");

router.post("/wishlist",
  userCheck,
  express.json(),
  [body("bookId", "Список заказов пуст")
    .exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некоректные данные при вхоже"
        });
      }
      const {bookId} = req.body;
      const user = res.locals.user;
      const match = user.wishList.findIndex((item) => {
        return bookId === item._id.toString()
      });
      if (match >= 0) {
        return res.status(400).json({
          message: "Данная книга уже есть в списке"
        });
      }


      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(400).json({
          message: "Данная книга не найдена"
        });
      }
      user.wishList = [...user.wishList, book];
      await user.save();
      return res.status(200)
        .json({message: "Книга добавлена в wishlist"});
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.get("/wishlist",
  userCheck,
  express.json(),
  async (req, res) => {
    try {


      const wishList = res.locals.user.wishList;
      if (wishList.length === 0) {
        return res.json({
          resultCode: 1,
          message: "У вас пустой wishlist"
        })
      }
      return res.json({
        resultCode: 0,
        wishList
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.delete("/wishlist",
  userCheck,
  express.json(),
  [body("bookId", "Список заказов пуст")
    .exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некоректные данные при вхоже"
        });
      }
      const {bookId} = req.body;
      const user = res.locals.user;

      if (user.wishList.length === 0) {
        res.status(400).json({
          message: "woshList пуст"
        })
      }
      user.wishList =
        user.wishList.filter((item) => bookId !== item._id.toString());

      await user.save();
      return res.status(200)
        .json({message: "Книга была удалена из wishList"});
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.get("/orders",
  userCheck,
  express.json(),
  async (req, res) => {
    try {


      let orders = res.locals.user.orderList;
      if (orders.length === 0) {
        return await res.json({
          resultCode: 1,
          message: "У вас нет заказов"
        })
      }
      orders = await Promise.all(orders.map(async (item) => {
        return await Order.findById(item)
      }));

      return await res.json({
        resultCode: 0,
        orders
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

module.exports = router;
