const User = require("../models/User");
const { generateUsername } = require("unique-username-generator");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.findOne({ email: email }); // check existing user
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

exports.login = async (req, res) => {};
