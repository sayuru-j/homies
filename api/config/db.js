const mongoose = require("mongoose");

const isProduction = process.env.NODE_ENV === "production";

async function connectDB() {
  try {
    await mongoose.connect(
      isProduction
        ? process.env.MONGODB_URL
        : "mongodb://127.0.0.1:27017/homies",
      options
    );

    console.log("Connected to MongoDB: " + process.env.NODE_ENV);
  } catch (error) {
    console.error(error);
  }
}

options = {};

module.exports = connectDB;
