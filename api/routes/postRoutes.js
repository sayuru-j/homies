const express = require("express");
const router = express.Router();

// Importing post controllers
const postController = require("../controllers/postController");

// --- Post creation --------------------------------
router.post("/create", postController.createPost);

// --- Post deletion --------------------------------
router.delete("/:postId", postController.deletePost);

module.exports = router;
