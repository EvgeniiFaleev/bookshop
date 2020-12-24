const config = require("config");
const jwt = require('jsonwebtoken');
const Admin = require("../models/admin");

const adminCheck = async (req, res, next) => {

  console.log(req.session)
  if (!req.session.adminId) {
    return res.status(403).json({
      message: "Нет права доступа"
    })
  }
  const {adminId} = req.session;

  // if (!req.cookies["access_token"]) {
  //   return res.status(401)
  //     .json({message: "Нет права доступа"})
  // }
  // console.log(req.cookies);
  // const token = req.cookies["access_token"].split(" ")[1];
  // const {id} = jwt.verify(token, config.get("privateKey"));

  const admin = await Admin.findById(adminId).exec();
  console.log(admin)
  if (!admin) {
    return res.status(401).json({
      message: "Нет прав для данного" + " действия"
    })
  }
  next();
};
module.exports = adminCheck;
