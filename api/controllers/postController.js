const Post = require("../models/Post");

// ---- Post creation --------------------------------
exports.createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content } = req.body;

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
  const { id } = req.user;
  const { postId } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete({
      _id: postId,
      author: id,
    });

    if (deletedPost)
      res.status(200).send({
        message: "Post deleted",
        deletedPost,
      });
    else
      res.send({
        error: "Post not found",
      });
  } catch (error) {
    console.error(error);
    res.status(404);
  }
};
