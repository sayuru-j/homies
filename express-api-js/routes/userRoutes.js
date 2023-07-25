const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authJwt = require("../middleware/authJWT");

// Profile
router.get("/session", userController.getSession);

// Logout
router.get("/logout", userController.logOut);

// Add friends
router.put("/add/:familiarId", [authJwt.verifyToken], userController.addFriend);

// --- Admin routes --------------------------------

// Make power
router.put(
  "/makepower",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.makePower
);

// Get all users
router.get(
  "/all",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.getUsers
);

//Delete users
router.delete(
  "/delete/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  userController.delete
);

module.exports = router;
