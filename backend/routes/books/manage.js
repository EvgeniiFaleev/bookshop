const {Router} = require("express");
const Book = require("../../models/book");
const adminCheck = require("../../common/adminCheck");
const {body, validationResult} = require('express-validator');

const router = Router();


router.post("/add",
  adminCheck,
  [body("author", "Введите Автора").exists(),
    body('title', "Введите имя книги").exists(),
    body("price", "Введите цену").exists(),
    body("picture", "Введите ссылку на фото").exists().isURL(),],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некоректные данные при вхоже"
        });
      }
      const {author, title, price, picture} = req.body;

      const matchBook = await Book.findOne({title});

      if (matchBook) {
        return res.status(400).json({
          message: "Такая книга уже существует"
        });
      }
      const book = new Book({
        author,
        title,
        price,
        picture
      });

      book.save(function (err) {
        if (err) {
          return res.status(500)
            .json("Ошибка при сохранении в" + " базу ");
        }
        return res.status(200).json({message: "Книга сохранена"})
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.delete("/remove", adminCheck, async (req, res) => {
  try {
    const {id} = req.body;

    Book.findByIdAndDelete(id, function (err, docs) {
      if (err) {
        console.log(err);
        return res.status(500).json({message: "Ошибка при удалении"})
      } else {
        console.log("Deleted : ", docs);
        return res.status(200).json({message: "Книга успешно удалена"})
      }
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({message: "Чтото пошло не так "})
  }
});

module.exports = router;

