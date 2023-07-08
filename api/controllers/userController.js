const User = require("../models/User");

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);
};
