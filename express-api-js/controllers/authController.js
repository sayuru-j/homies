const User = require("../models/User");
const { generateUsername } = require("unique-username-generator");
const bcrypt = require("bcrypt");
const { authJwt } = require("../middleware");

exports.signUp = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: generateUsername(), // Username generation
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10), // Hashing the password
    role: req.body.role,
    // connections: req.body.connections,
  });

  try {
    const createdUser = await User.create(user);

    if (createdUser) {
      res.status(200).send({
        message: "User created successfully",
        createdUser,
      });
    } else
      res.status(403).send({
        error: "User creation failed",
      });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(202).send({ error: "User not found" });
    }

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (passwordMatched) {
      const accessToken = authJwt.generateToken(user);

      // // Save session
      // req.session.userId = user._id;
      // req.session.userName = user.username;
      // req.session.name = user.name;

      return res.status(200).json({
        userId: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        accessToken,
      });
    } else {
      return res.status(202).send({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
