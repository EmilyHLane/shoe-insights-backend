const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// build for beta - womens's shoes only
const ShoeSchema = new Schema({
  gender: String,
  category: String,
  womensSize: Number,
  womensWidth: String,
  brand: String,
  price: String,
  footShape: Number,
  results: [
    {
      shoelink: String,
      shoeName: String,
      shoeBrand: String,
      shoeStyle: String,
      shoePrice: String
    }
  ]
});

const Shoe = mongoose.model("Shoe", ShoeSchema);
module.exports = Shoe;
