const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  allPosts,
  getPost,
  deletePost,
} = require("../controllers/postCtr");


const {
  createPostValidator,
  removePostValidator,
  updatePostValidator,
  getPostValidator,
} = require("../utils/validators/postValidator");

// @desc Create Post
// @access Protect
router.post(
  "/",
  createPostValidator,
  createPost
);

// @desc Update Post
// @access Protect
router.put(
  "/:id",
  updatePostValidator,
  updatePost
);

// @desc get all Post
// @access Protect
router.get("/", allPosts);

// @desc get a single Post
// @access Protect
router.get(
  "/:id",
  getPostValidator,
  getPost
);

// @desc Delete a Post
// @access Protect
router.delete(
  "/:id",
  removePostValidator,
  deletePost
);

module.exports = router;
