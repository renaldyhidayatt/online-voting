const express = require("express");
const router = express.Router();
const PositionController = require("../controllers/position.controller");



router.get("/", PositionController.findAll);
router.get("/:id", PositionController.findById);
router.post("/", PositionController.create);
router.put('/:id', PositionController.findByUpdate);
router.delete("/:id", PositionController.findByDelete);

module.exports = router;