const express = require("express");
const router = express.Router();
ctrl = require("../../controllers/shoeController");

// get all shoes
router.get("/", ctrl.index);

// create shoe
router.post("/", ctrl.create);

// get shoe by id
router.get("/:id", ctrl.show);

// update shoe
router.put("/:id", ctrl.update);

module.exports = router;
