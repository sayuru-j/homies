const User = require("../models/User");

exports.makePower = async (req, res) => {
  const { power } = req.user;
  const { email, new_power } = req.body;
  if (power === "admin") {
    try {
      const result = await User.findOneAndUpdate(
        { email },
        {
          power: new_power,
        }
      );
      if (result)
        res
          .status(200)
          .send({ message: `User's power changed to ${new_power}` });
    } catch (error) {
      console.error(error);
    }
  } else {
    res
      .status(401)
      .send({ message: "You do not have permission to access this" });
  }
};

exports.getSession = async (req, res) => {
  const { userId, userName, name } = req.session;

  if (!userId) return null;
  res.send({ userId, userName, name });
};

exports.logOut = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session", err);
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send({ message: "Logout successfull" });
    }
  });
};
