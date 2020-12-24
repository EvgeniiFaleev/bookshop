const {Schema, model} = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema({
  orderList: {
    type: [{
      id:String,
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
  address: {
    type:String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required:true
  },
  name:{
    type: String,
    required: true
  }
});

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20,
};

schema.plugin(mongoosePaginate);

module.exports = model("Order", schema);

