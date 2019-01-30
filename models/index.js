const mongoose = require("mongoose");
const port = 27017;
const url =
  process.env.MONGODB_URI || `mongodb://localhost:${port}/shoe-insights`;

mongoose
  .connect(
    url,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`Mongodb connected on port: ${port}`))
  .catch(err => console.log(err));

module.exports = {
  Shoe: require("./Shoe")
};
