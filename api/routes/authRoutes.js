const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { verifySignUp } = require("../middleware");
const Validator = require("../validators");

// Sign up
router.post(
  "/register",
  [Validator.Register, Validator.Validate], // Validator
  [verifySignUp.checkExistingEmail], // Middleware
  authController.signUp
);

// Login
router.post(
  "/login",
  [Validator.Login, Validator.Validate],
  authController.login
);

module.exports = router;
