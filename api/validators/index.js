const { validationResult, body } = require("express-validator");

const Validate = (req, res, next) => {
  // Handle validation errors, if any
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors);
  }

  next();
};

// Auth validation
const Login = [
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const Register = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("role").notEmpty().withMessage("Role is required"),
];

const Validator = {
  Validate,
  Login,
  Register,
};

module.exports = Validator;
