const User = require("../models/User");
const { generateUsername } = require("unique-username-generator");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/auth");

exports.signUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.findOne({ email }); // check existing user
  if (!user) {
    let username = generateUsername("", 3);
    try {
      const created = await User.create({
        name: name,
        username: username,
        email: email,
        password: await bcrypt.hash(password, 10),
        role: role,
      });
      res.status(200).send({
        status: "success",
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  if (user) res.send({ status: "Email is already taken" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(403).send({ status: "User not found" });
  if (user) {
    const matches = await bcrypt.compare(password, user.password);
    if (matches) {
      const accessToken = generateToken(user);
      // Set session
      req.session.userId = user._id;
      req.session.userName = user.username;
      req.session.name = user.name;

      return res.status(200).json({
        name: user.name,
        username: user.username,
        email: user.email,
        accessToken,
      });
    } else {
      res.send({ error: "Invalid password" });
    }
  } else {
    return res.status(401).send({ status: "Unauthorized" });
  }
};
