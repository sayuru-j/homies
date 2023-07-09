const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");

// Profile
router.get("/profile", userController.getSession);

// Logout
router.get("/logout", userController.logOut);

// Make power
router.put("/makepower", verifyToken, userController.makePower);

module.exports = router;
