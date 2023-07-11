const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");

// Profile
router.get("/session", verifyToken, userController.getSession);

// Logout
router.get("/logout", userController.logOut);

// Make power
router.put("/makepower", verifyToken, userController.makePower);

// Get all users
router.get("/all", verifyToken, userController.getUsers);

//Delete users
router.delete("/delete/:id", userController.delete);

module.exports = router;
