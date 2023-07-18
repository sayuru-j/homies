const express = require("express"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  connectDB = require("./config/db");

const testRoutes = require("./routes/testRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const groupRoutes = require("./routes/groupRoutes");
const postRoutes = require("./routes/postRoutes");

// Create global app object
const app = express();

// Express configuration
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectDB();

// Route handlers
app.use("/api", require("./routes"));

// Server startup
const server = app.listen(process.env.PORT || 8000, () =>
  console.log(`Server started on ${server.address().port}`)
);
