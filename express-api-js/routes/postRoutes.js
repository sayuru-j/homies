const express = require("express");
const router = express.Router();

// Importing post controllers
const postController = require("../controllers/postController");
const authJWt = require("../middleware/authJWT");

// --- Post creation --------------------------------
router.post("/create", [authJWt.verifyToken], postController.createPost);

// --- Post deletion --------------------------------
router.delete("/:postId", [authJWt.verifyToken], postController.deletePost);

// --- Getting all posts of users's friends ---------
router.get("/feed", [authJWt.verifyToken], postController.getFeed);

module.exports = router;
