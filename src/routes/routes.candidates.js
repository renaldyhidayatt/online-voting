const express = require("express");
const router = express.Router();
const CandidateController = require("../controllers/candidate.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { CandidateFile } = require("../utils/multer");

router.get("/", CandidateController.findAll)
router.get("/:id", CandidateController.findById)
router.post("/", [authMiddleware,CandidateFile.single("image")],CandidateController.create)
router.put("/:id", CandidateController.findById);
router.delete("/:id", CandidateController.findByDelete);

module.exports = router;