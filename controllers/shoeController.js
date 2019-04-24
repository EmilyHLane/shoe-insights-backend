const db = require("../models");
const Shoe = db.Shoe;

// get all shoes
const index = (req, res) => {
  Shoe.find({}, (err, allShoes) => {
    if (err) throw err;
    res.json(allShoes);
  });
};

// find one by ID
const show = (req, res) => {
  Shoe.findById(req.params.id, (err, showShoe) => {
    if (err) throw err;
    res.json(showShoe);
  });
};

// create a new shoe
const create = (req, res) => {
  Shoe.create(
    {
      gender: req.body.gender,
      category: req.body.category,
      subCategory: req.body.subCategory,
      womensSize: req.body.womensSize,
      womensWidth: req.body.womensWidth,
      brand: req.body.brand,
      price: req.body.price,
      color: req.body.color,
      bootShaft: req.body.bootShaft,
      heelHeight: req.body.heelHeight,
      heelStyle: req.body.heelStyle,
      toeStyle: req.body.toeStyle,
      occasion: req.body.occasion,
      materials: req.body.materials,
      features: req.body.features,
      performance: req.body.performance,
      theme: req.body.theme,
      footShape: req.body.footShape
    },
    (err, newShoe) => {
      if (err) throw err;
      res.json(newShoe);
    }
  );
};

// find by ID and update
const update = (req, res) => {
  Shoe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedShoe) => {
      if (err) throw err;
      res.json(updatedShoe);
    }
  );
  console.log(res);
};

module.exports = { index, create, update, show };
