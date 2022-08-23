const express = require("express");
const permissionController = require("../controllers/permission.controller");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
// const roleMiddleware = require("../middleware/role.middleware");

router.get("/auth", [authMiddleware], permissionController.votingPermission);
router.get("/admin", [authMiddleware, roleMiddleware], permissionController.adminPermission)

module.exports = router;