const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const groupRoutes = require("./routes/groupRoutes");
const postRoutes = require("./routes/postRoutes");

const sessionMiddleware = require("./middleware/session");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

const port = process.env.PORT || 8000;

// Middleware
app.use(sessionMiddleware);

// Route handlers
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.use("/group", groupRoutes);
app.use("/post", postRoutes);

app.listen(port, () => console.log(`App listening on ${port}`));
