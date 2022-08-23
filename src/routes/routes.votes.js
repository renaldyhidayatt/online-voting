const express = require("express");
const voteController = require("../controllers/vote.controller");
const router = express.Router();


router.get("/", voteController.findAll);
router.get("/:id", voteController.findById);
router.post("/", voteController.create);
router.put("/:id", voteController.findByUpdate);
router.delete("/:id", voteController.findByDelete);

module.exports = router;