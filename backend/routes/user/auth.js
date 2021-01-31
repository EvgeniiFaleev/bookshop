const {Router} = require("express");
const User = require("../../models/user");
const router = Router();
const config = require("config");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const express = require('express');




router.post("/register", [ body("email").isEmail(), body('password')
  .isLength({min: 5}),], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        errors: errors.array(),
        message: "Password must be at least 5 symbols"
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
      passwordHash,
      wishList: [],
      orderList: []
    });




    const savedUser = await user.save();
    if (savedUser) {
      req.session.userId = user.id;
      return res.json({
        message: "вы успешно вошли"
      });
    }
      return res.status(500)
        .json("Ошибка при сохранении в" + " базу ");


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
       return  res.status(403)
          .json({message: "Неправильный пароль или логин"})
      }

      req.session.userId = user.id;
      console.log(req.session)
      return res.json({
        message: "вы успешно вошли"
      })

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

router.post("/me", async (req, res) => {
  try {
    console.log(req.cookies)
    const id =  req.session.userId;
    if(!id){
      return res.json({
        resultCode: 1,
        message: "Пользователь не авторизован"
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.json({
        resultCode: 1,
        message: "Не найден пользователь с данным id"
      });
    }

    let { id: userId, email} = user;
    return  res.json({
      resultCode: 0,
      userInfo:{
        userId,email
      }
    })
  } catch (e) {
    console.error(e);
    return  res.status(500).json({message: "Чтото пошло не так "})
  }
});

module.exports = router;

