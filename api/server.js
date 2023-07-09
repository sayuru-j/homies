const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 8000;

// Route handlers
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Express server listening on ${port}`));
