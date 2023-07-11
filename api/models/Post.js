const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      text: {
        type: String,
        required: true,
      },

      images: [
        {
          url: String,
        },
      ],
    },

    likes: [
      {
        user: mongoose.Schema.Types.ObjectId,
      },
    ],

    comments: [
      {
        author: mongoose.Schema.Types.ObjectId,
        body: String,
        timestamp: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
