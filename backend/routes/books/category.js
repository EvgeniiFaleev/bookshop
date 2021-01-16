const {Router} = require("express");
const router = Router();
const Book = require("../../models/book");


router.get("/category",

  async (req, res) => {

    try {

      const category = req.query.cat;
      console.log(req.query)
      if(!category) return res.status(400).json({message: `Отправьте  название категории`})
      const match = await Book.find({categories: category});
      if(!match) return res.status(404).json({message: `Категория не найдена`})

      res.status(200).json({books: match, categoryName: category})
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так " + e})
    }
  });


module.exports = router;
