const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Sign up
router.post("/register", authController.signUp);

// Login
router.post("/login", authController.login);

module.exports = router;
