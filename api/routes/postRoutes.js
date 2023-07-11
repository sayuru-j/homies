const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth");

// Importing post controllers
const postController = require("../controllers/postController");

// --- Post creation --------------------------------
router.post("/create", verifyToken, postController.createPost);

// --- Post deletion --------------------------------
router.delete("/:postId", verifyToken, postController.deletePost);

module.exports = router;
