const {Router} = require("express");
const router = Router();
const Book = require("../../models/book");


router.get("/chart",

  async (req, res) => {

    try {

      const adventure = await Book.find({categories: "Adventure"});

      console.log(adventure);

      return res.json({
        Adventure: adventure
      })
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так " + e})
    }
  });


module.exports = router;
