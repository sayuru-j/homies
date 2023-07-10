const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  session: Object,
  expires: Object,
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
