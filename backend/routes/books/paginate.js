const {Router} = require("express");
const router = Router();
const Book = require("../../models/book");

router.get("/",

  async (req, res) => {

    try {

      const options = {
        page: req.query.page,
        limit: req.query.count,
      };

      const result = await Book.paginate({}, options);

      return res.json({
        books: result.docs
      })

    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });


module.exports = router;
