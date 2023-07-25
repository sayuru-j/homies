const User = require("../models/User");

const checkExistingEmail = async (req, res, next) => {
  // Email
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(203).send({
      error: "Email already exists",
    });
  else {
    next();
    return;
  }
};

const verifySignUp = {
  checkExistingEmail,
};

module.exports = verifySignUp;
