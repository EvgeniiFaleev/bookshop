const {Router} = require("express");
const Admin = require("../../models/admin");
const router = Router();
const config = require("config");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const multer  = require('multer');
const upload  = multer();
const express = require("express");
const path = require('path');



router.post("/login", upload.none(),
  [body("login", "Введите корректный Login"), body('password',
    "Пароль должен состоять не менее чем из 5 символов").exists()
    .isLength({min: 5})],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).json({
          errors: errors.array(),
          message: "Некоректные данные при входе"
        });
      }

      const {login, password} = req.body;
      console.log(login)
      const admin = await Admin.findOne({login});

      if (!admin) {
        return res.status(400).json({
          message: "Такого" + " админа не существует"
        });
      }

      const match = await bcrypt.compare(password, admin.passwordHash);

      if (!match) {
        return res.status(403)
          .json({message: "Неправильный пароль или логин"})
      }
      console.log(req.session)
      console.log(admin.id)
      // const token = jwt.sign({
      //   id: admin.id
      // }, config.get("privateKey"), {
      //   expiresIn: "1h"
      // });
      // return res.cookie('access_token', 'Bearer ' + token).json({message: "вы успешно вошли"})
      req.session.adminId = admin.id;
      return res.json({
        message: "вы успешно вошли"
      })
    } catch (e) {
      console.error(e);
      return res.status(500).json({message: "Чтото пошло не так "})
    }
  });

router.delete("/logout", async (req, res) => {
  try {
console.log(req.session)
    if (!req.session.adminId) {
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

    return res.json({message: "вы успешно вышли"})
  } catch (e) {
    console.error(e);
    res.status(500).json({message: "Чтото пошло не так "})
  }
});


module.exports = router;
