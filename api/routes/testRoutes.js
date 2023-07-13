const express = require("express");
const { authJwt } = require("../middleware");
const router = express.Router();

// All access
router.get("/", (req, res) => {
  res.send("Public");
});

router.get("/user", authJwt.verifyToken, (req, res) => {
  res.send("User");
});

router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
  res.send("Admin");
});

module.exports = router;
