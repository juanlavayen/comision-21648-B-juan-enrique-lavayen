const { PostModel } = require("../models/Post");

// controladores que renderizan páginas
const getAllPosts = async (req, res) => {
  const allPosts = await PostModel.findAll();

  res.render("index", { allPosts });
};

const formCreateNewPost = async (req, res) => {
  res.render("new-post");
};

const formUpdatePost = async (req, res) => {
  const postId = req.params.id;

  const post = await PostModel.findByPk(postId);

  if (!post) {
    return res.redirect("/posts");
  }

  res.render("update-post", { post });
};

// controladores que efectuan cambios en la base de datos y redireccionan
const createPost = async (req, res) => {
  const { titulo_post, contenido_post, link_post } = req.body;

  await PostModel.create({ titulo_post, contenido_post, link_post });

  res.redirect("/posts");
};

const updatePost = async (req, res) => {
  const { id, titulo_post, contenido_post, link_post } = req.body;

  const note = await PostModel.findByPk(id);

  await post.update({ titulo_post, contenido_post, link_post });

  res.redirect("/posts");
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  const post = await PostModel.findByPk(postId);

  await post.destroy();

  res.redirect("/posts");
};

module.exports = {
  getAllPosts,
  formCreateNewPost,
  createPost,
  formUpdatePost,
  updatePost,
  deletePost,
};
