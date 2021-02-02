const User= require("../models/user");

const userCheck = async (req, res, next) => {

  if (!req.session.userId) {
    return res.status(403).json({
      message: "Нет права доступа"
    })
  }
  const {userId} = req.session;

  const candidate = await User.findById(userId).exec();
  if (!candidate) {
    return res.status(401).json({
      message: "Нет прав для данного" + " действия"
    })
  }
  res.locals.user = candidate;
  next();
};
module.exports = userCheck;
