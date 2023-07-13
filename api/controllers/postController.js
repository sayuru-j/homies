const Post = require("../models/Post");
const User = require("../models/User");

// ---- Post creation --------------------------------
exports.createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;

  if (!id) return res.status(404);

  try {
    const createdPost = await Post.create({
      title: title,
      author: id,
      content: content,
    });

    if (createdPost)
      res.status(200).send({
        message: "Post created successfully",
        createdPost,
      });
    else {
      res.status(404).send({
        error: "Post creation failed",
      });
    }
  } catch (error) {
    console.error(error);
    res.send(404);
  }
};

// --- Post deletion --------------------------------
exports.deletePost = async (req, res) => {
  const { id, power } = req.user;
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    // Checks if the author of the post is the requested id
    // or admin role can delete the post
    if ((post && post.author.toString() === id) || power === "admin") {
      const deletedPost = await Post.findByIdAndDelete(postId);

      if (deletedPost)
        res.status(200).send({
          message: "Post deleted",
          deletedPost,
        });
    } else {
      res.status(403).send({
        error: "You do not have permission to delete this post",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "An error occured during the process of deleting the post",
    });
  }
};

// Getting posts owned --------------------------------
exports.getPostsOwned = async (userId) => {
  try {
    const posts = await Post.find({ author: userId });
    return posts;
  } catch (error) {
    console.error(error);
  }
};

// --- List of posts related to a user's connections --------------------------------
exports.getFeed = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;

  // Checks the user
  if (userId === id) {
    try {
      const user = await User.findById(userId);

      if (user && user.connections.length > 0) {
        const allPosts = [];

        for (const userId of user.connections) {
          const posts = await this.getPostsOwned(userId);
          allPosts.push(...posts);
        }

        res.send(allPosts);
      } else {
        res.send({ message: "Add some friends to feed your wall" });
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    res.status(404).send({
      error: "An error occured",
    });
  }
};
