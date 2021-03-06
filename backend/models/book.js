const {Schema, model} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema({
  author: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true
  },
  categories: {
   type: [String],
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
    unique: true
  },
  // quantity: {
  //   type: Number,
  //   min: 1
  // }

});
schema.plugin(mongoosePaginate);

module.exports = model("Book", schema);
