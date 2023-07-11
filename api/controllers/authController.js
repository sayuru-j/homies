const User = require("../models/User");
const { generateUsername } = require("unique-username-generator");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/auth");

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(202).send({ error: "Email is already taken" });
    }

    const username = generateUsername("", 3); // username genrator
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      role,
    });

    res
      .status(200)
      .send({ success: "Account has been registered", createdUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
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
      const accessToken = generateToken(user);

      // Save session
      req.session.userId = user._id;
      req.session.userName = user.username;
      req.session.name = user.name;

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
