const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const PostModel = sequelize.define("foro", {
  titulo_post: DataTypes.STRING,
  contenido_post: DataTypes.TEXT,
  link_post: DataTypes.STRING,
});

module.exports = { PostModel };
