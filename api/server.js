const express = require("express"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  connectDB = require("./config/db");

// Create global app object
const app = express();

// Some normal express configuration
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectDB();

// Route for all routes
app.use("/api", require("./routes"));

// Server startup
const server = app.listen(process.env.PORT || 8000, () =>
  console.log(`Server started on ${server.address().port}`)
);
