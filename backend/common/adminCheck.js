const Admin = require("../models/admin");

const adminCheck = async (req, res, next) => {

  if (!req.session.adminId) {
    return res.status(403).json({
      message: "Нет права доступа"
    })
  }
  const {adminId} = req.session;


  const admin = await Admin.findById(adminId).exec();
  if (!admin) {
    return res.status(401).json({
      message: "Нет прав для данного" + " действия"
    })
  }
  next();
};
module.exports = adminCheck;
