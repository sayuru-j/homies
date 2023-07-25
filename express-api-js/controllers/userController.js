const User = require("../models/User");

exports.makePower = async (req, res) => {
  const { email, new_power } = req.body;

  try {
    const result = await User.findOneAndUpdate(
      { email },
      {
        power: new_power,
      }
    );
    if (result)
      res.status(200).send({ message: `User's power changed to ${new_power}` });
  } catch (error) {
    console.error(error);
  }
};

exports.getSession = async (req, res) => {
  const { userId, userName, name } = req.session;
  const { expires } = req.session.cookie;
  console.log(req.headers.authorization);
  if (!userId) return res.send({ message: "No session" });
  else res.send({ userId, userName, name, expires });
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

exports.getUsers = async (req, res) => {
  const { power } = req.user;
  if (power === "admin") {
    const users = await User.find({});
    res.send(users);
  } else {
    res.send({ message: "You're not authorized" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const result = await User.findOneAndDelete({ _id: id });
    if (result) res.send({ message: "User Deleted" });
    else {
      res.send({ error: "User Not Found" });
    }
  }
};

// ---- Add friends --------------------------------
exports.addFriend = async (req, res) => {
  const { familiarId } = req.params,
    { id } = req.user;

  try {
    const familiarExists = await User.findById(familiarId);
    if (familiarExists) {
      const result = await User.findOneAndUpdate(
        { _id: id },
        {
          connections: [familiarId],
        }
      );
      res.status(200).send({
        message: `You are friends with ${familiarExists.name}`,
        username: familiarExists.username,
      });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
