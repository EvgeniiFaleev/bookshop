const {Router} = require("express");
const router = Router();
const Book = require("../../models/book");


router.get("/chart",

  async (req, res) => {

    try {

      const adventure = await Book.find({categories: "Adventure"});
      const penAwards = await Book.find({categories: "PEN America 2021 Literary Awards Longlist"});

      console.log(adventure);

      return res.json({
        categories: {Adventure: adventure},
        topLists: {"PEN America 2021 Literary Awards Longlist": penAwards}
      });

    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так " + e})
    }
  });


module.exports = router;
