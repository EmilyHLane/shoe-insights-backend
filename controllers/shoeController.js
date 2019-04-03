const db = require("../models");
const Shoe = db.Shoe;

// get all boots
const index = (req, res) => {
  Shoe.find({}, (err, allBoots) => {
    if (err) throw err;
    res.json(allBoots);
  });
};

// create a new boot
// TODO: convert to lowercase here or earlier?
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
  console.log("ok");
};

module.exports = { index, create, update };
