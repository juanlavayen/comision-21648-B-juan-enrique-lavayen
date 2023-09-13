const { Router } = require("express");
const {
  getAllPosts,
  formCreateNewPost,
  formUpdatePost,
  createPost,
  updatePost,
  deletePost,
} = require("../src/controllers/posts.controllers");

const router = Router();

router.get("/", getAllPosts);
router.get("/create", formCreateNewPost);
router.get("/update/:id", formUpdatePost);
router.get("/delete/:id", deletePost);

router.post("/", createPost);
router.post("/update", updatePost);

module.exports = router;
