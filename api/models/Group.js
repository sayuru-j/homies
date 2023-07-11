const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    groupOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    groupName: {
      type: String,
      required: true,
    },

    groupDescription: {
      type: String,
      required: true,
    },

    groupProfileImage: {
      type: String,
    },

    groupPrivacy: {
      type: String,
      enum: ["public", "private"],
      default: "private",
      required: true,
    },

    groupAnnouncement: String,

    groupPermissions: [
      {
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["admin", "member"],
          default: "member",
          required: true,
        },
      },
    ],

    joinRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    activityLog: [
      {
        description: String,
        timestamp: {
          type: Date,
          default: Date.now(),
        },
      },
    ],

    chatHistory: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        message: {
          type: String,
          required: true,
        },

        timestamp: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
