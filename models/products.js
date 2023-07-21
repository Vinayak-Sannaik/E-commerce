const mongoose = require('mongoose');

//Define product schema
const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  quantity : {
    type : Number,
    required : true,
    default : 0,
  },
});

//create user model based on schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;