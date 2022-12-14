const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.get("/", UserController.findAll);
router.post("/", UserController.create);
router.get("/:id", UserController.findById);
router.put("/:id", UserController.findByUpdate);
router.delete("/:id", UserController.findByDelete);


module.exports = router;