const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const sessionMiddleware = require("./middleware/session");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 8000;

// Middleware
app.use(sessionMiddleware);

// Route handlers
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Express server listening on ${port}`));
