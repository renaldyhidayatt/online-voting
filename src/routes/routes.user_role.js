const express = require("express");
const router= express.Router();
const UserRoleController = require("../controllers/user_role.controller")

router.get("/", UserRoleController.findAll);
router.get("/:id", UserRoleController.findId);
router.put("/:id", UserRoleController.findByUpdate);
router.delete("/:id", UserRoleController.findByDelete);


module.exports = router;