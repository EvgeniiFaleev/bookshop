const {Schema, model} = require("mongoose");

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
  },
  wishList: {
    type: [{
      id:String,
      count: Number,
      author: String,
      title: String,
      price: Number,
    }],
  }
});

module.exports = model("User", schema);
