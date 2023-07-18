const router = require("express").Router();

router.use("/auth", require("./authRoutes"));
router.use("/user", require("./userRoutes"));
router.use("/group", require("./groupRoutes"));
router.use("/post", require("./postRoutes"));

module.exports = router;
