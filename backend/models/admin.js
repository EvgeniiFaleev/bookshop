const {Schema, model} = require("mongoose");

const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
    unique: true
  },

});

module.exports = model("Admin", schema);
