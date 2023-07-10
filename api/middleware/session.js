const express = require("express");
const router = express.Router();
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Configure session middleware
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 86400000,
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URL,
  }),
});

const saveSession = (req, res, next) => {
  req.session.userId = req.user._id;
  req.session.userName = req.user.username;
  req.session.name = req.user.name;
  next();
};

(module.exports = sessionMiddleware), { saveSession };
