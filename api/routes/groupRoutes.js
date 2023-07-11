const express = require("express");
const router = express.Router();

const groupController = require("../controllers/groupController");
const { verifyToken } = require("../middleware/auth");

// --- User's current groups ---
router.get("/", verifyToken, groupController.currentGroups);

// --- Group creation ---
router.post("/create", verifyToken, groupController.createGroup);

// --- Group deletes ---
router.delete("/:groupId", verifyToken, groupController.deleteGroup);

module.exports = router;
