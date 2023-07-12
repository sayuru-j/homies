const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { verifySignUp } = require("../middleware");

// Sign up
router.post(
  "/register",
  verifySignUp.checkExistingEmail,
  authController.signUp
);

// Login
router.post("/login", authController.login);

module.exports = router;
