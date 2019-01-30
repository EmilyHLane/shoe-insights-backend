const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// build for boots test then expand
// would this be better as a SQL table?
// for numbers, use string or number? --> use number
const ShoeSchema = new Schema({
  gender: String,
  category: String,
  subCategory: String,
  womensSize: Number,
  womensWidth: String,
  brand: String,
  price: String,
  color: String,
  bootShaft: String,
  heelHeight: String,
  heelStyle: String,
  toeStyle: String,
  occasion: String,
  materials: String,
  features: String,
  performance: String,
  theme: String,
  footShape: Number
});

const Shoe = mongoose.model("Shoe", ShoeSchema);
module.exports = Shoe;
