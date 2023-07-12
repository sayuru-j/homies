const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.headers["x-access-token"] || req.headers.authorization?.split(" ")[1];

  if (!token) res.status(403).send({ message: "Access token not provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized!" });
  }
};

const generateToken = (user) => {
  const { id, name, email, role, power } = user;
  const accessToken = jwt.sign(
    {
      id,
      name,
      email,
      role,
      power,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return accessToken;
};

// ---- Role check --------------------------------

const isAdmin = (req, res, next) => {
  const { power } = req.user;

  if (power === "admin") {
    next();
    return;
  } else {
    res.status(403).send({ message: "Require admin power to perform this !" });
  }
};

const authJWt = { verifyToken, generateToken, isAdmin };

module.exports = authJWt;
