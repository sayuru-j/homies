const express = require("express");
const router = express.Router();

const groupController = require("../controllers/groupController");
const authJwt = require("../middleware/authJWT");

// --- User's current groups ---
router.get("/", [authJwt.verifyToken], groupController.currentGroups);

// --- Group creation ---
router.post("/create", [authJwt.verifyToken], groupController.createGroup);

// --- Group deletes ---
router.delete("/:groupId", [authJwt.verifyToken], groupController.deleteGroup);

module.exports = router;
