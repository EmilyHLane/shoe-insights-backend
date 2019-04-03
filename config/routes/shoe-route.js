const express = require("express");
const router = express.Router();
ctrl = require("../../controllers/shoeController");

// get all boots test
router.get("/", ctrl.index);

// create boots test
router.post("/", ctrl.create);

// update boots test
router.put("/:id", ctrl.update);

module.exports = router;
