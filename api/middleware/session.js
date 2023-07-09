const express = require("express");
const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Configure session middleware
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URL,
  }),
});

module.exports = sessionMiddleware;
