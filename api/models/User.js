const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    bio: {
      type: String,
    },
    role: {
      type: String,
      enum: ["developer", "designer"],
    },
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    links: {
      github: {
        url: String,
      },
      discord: {
        url: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
