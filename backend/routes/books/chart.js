const {Router} = require("express");
const router = Router();
const Book = require("../../models/book");


router.get("/chart",

  async (req, res) => {

    try {

      const adventure = await Book.find({categories: "Adventure"});
      const penAwards = await Book.find({categories: "PEN America 2021 Literary Awards Longlist"});


      return res.json({
        categories: {Adventure: adventure},
        topLists: {"PEN America 2021 Literary Awards Longlist": penAwards}
      });

    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так " + e})
    }
  });
router.post("/search",

  async (req, res) => {

    try {
      const searchString = req.body.query
      console.log(searchString)
      const titles = await Book.find({title: { $regex: searchString, $options: 'i'}}).limit(10);
      const authors = await Book.find({author: { $regex: searchString, $options: 'i'}}).limit(10);

return res.json({resultCode: 0, titles, authors})

    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так " + e})
    }
  });


module.exports = router;
