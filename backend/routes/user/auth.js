const {Router} = require("express");
const User = require("../../models/user");
const router = Router();
const config = require("config");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');


router.post("/me", async (req, res) => {
  try {
    if (!req.cookies["access_token"]) {
      return res.json({
        resultCode: 1,
        message: "Пользователь не авторизован"
      });
    }

    console.log(req.cookies);

    const token = req.cookies["access_token"].split(" ")[1];
    const {id} = jwt.verify(token, config.get("privateKey"));

    const user = await User.findById(id).exec();
    console.log(user);
    if (!user) {
      return res.json({
        resultCode: 1,
        message: "Пользователь не авторизован"
      });
    }

    let {passwordHash, ...userInfo} = user;
    res.json({
      resultCode: 1,
      userInfo
    })
  } catch (e) {
    console.error(e);
    res.status(500).json({message: "Чтото пошло не так "})
  }
});

router.post("/register", [body("email").isEmail(), body('password')
  .isLength({min: 5})], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        errors: errors.array(),
        message: "Некоректные данные " + JSON.stringify(req.body)
      });
    }

    const {email, password} = req.body;

    const candidate = await User.findOne({email}).exec();


    if (candidate) {
      return res.status(400).json({
        message: "Такой" + " пользователь уже существует"
      });

    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      passwordHash
    });

    // const token = jwt.sign({
    //   id: user.id
    // }, config.get("privateKey"), {
    //   expiresIn: "1h"
    // });
console.log(req.session)
    user.save(function (err) {
      if (err) {
        return res.status(500)
          .json("Ошибка при сохранении в" + " базу ");
      }
      res.json({
        message: "Пользователь сохранен в базу"
      })
    })


  } catch (e) {
    res.status(500).json({message: "Чтото пошло не так"})
  }
});

router.post("/login",
  [body("email", "Введите корректный email").isEmail(),
    body('password',
      "Пароль должен состоять не менее чем из 5 символов").exists()
      .isLength({min: 5})],
  async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array({onlyFirstError: true}),
          message: "Некоректные данные при вхоже"
        });
      }
      const {email, password} = req.body;
      const user = await User.findOne({email});

      if (!user) {
        return res.status(400).json({
          message: "Такого" + " пользователя не существует"
        });
      }

      const match = await bcrypt.compare(password, user.passwordHash);

      if (!match) {
        res.status(403)
          .json({message: "Неправильный пароль или логин"})
      }

      req.session.userId = user.id;
      return res.json({
        message: "вы успешно вошли"
      })
      // const token = jwt.sign({
      //   id: user.id
      // }, config.get("privateKey"), {
      //   expiresIn: "1h"
      // });
      // return await res.cookie('access_token', 'Bearer ' + token)
      //   .json({message: "вы успешно вошли"})
    } catch (e) {
      console.error(e);
      res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.get("/logout", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(400).json({
        message: "Вы не были залогинены"
      })
    }
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Ошибка при закрытии сессии"
        })
      }
    });

    return res.json({message: "вы успешно вышли"});
  } catch (e) {
    console.error(e);
    res.status(500).json({message: "Чтото пошло не так "})
  }
});

module.exports = router;
