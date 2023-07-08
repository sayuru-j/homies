const mongoose = require("mongoose");

async function connectDB() {
  await mongoose
    .connect(process.env.MONGODB_URL, options)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error(err));
}

options = {};

module.exports = connectDB;
