const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Express server listening on ${port}`));
