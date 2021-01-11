const {Router} = require("express");
const Book = require("../../models/book");
const config = require("config");
const router = Router();

router.get("/item", async(req,res) => {
 try{
   console.log(req.query)
   const bookId = req.query.id
  if(!bookId) return res.status(400).json({message: `Отправьте id кинги`})
   const match = await Book.findById(bookId);
  if(!match) return res.status(404).json({message: `Книга не найдена`})

   res.status(200).json({book: match})
} catch (e) {
  console.error(e);
  return res.status(500).json({message: "Чтото пошло не так " + e})
}
});

module.exports = router;
