const {Schema, model} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema({
  orderList: {
    type: [{
      bookId: {
      type:  Schema.Types.ObjectId, ref: 'Book'
      },
      count: Number,
      author: String,
      title: String,
      price: Number,

    }],
  },
  totalPrice: {
    type: Number,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  },
  city: {
    type:String,
    required: true
  },
  streetAddress: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required:true
  },
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20,
};

schema.plugin(mongoosePaginate);

module.exports = model("Order", schema);

