const express = require("express");
const router = express.Router();

const groupController = require("../controllers/groupController");

// --- User's current groups ---
router.get("/", groupController.currentGroups);

// --- Group creation ---
router.post("/create", groupController.createGroup);

// --- Group deletes ---
router.delete("/:groupId", groupController.deleteGroup);

module.exports = router;
