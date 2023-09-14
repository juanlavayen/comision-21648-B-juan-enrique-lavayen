const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database");
require("./src/models/Post");

const app = express();

// Middlewares
app.use(express.json()); // Middleware para procesar JSON
app.use(express.urlencoded({ extended: false })); // Middleware para procesar datos de formularios
app.use(cors()); // Middleware para habilitar CORS
app.use(morgan("dev")); // Middleware para registrar solicitudes en la consola

// Configuración de la carpeta de vistas
app.set("views", __dirname + "/src/views");

// Configuración de la carpeta pública (archivos estáticos)
app.use(express.static("public"));

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");

// Rutas relacionadas con "/posts"
app.use("/posts", require("./routes/posts.routes"));

// Iniciar el servidor en el puerto 4000
app.listen(4000, () => {
  sequelize.sync({ force: false }); // Sincronizar la base de datos (no forzar la eliminación de datos existentes)

  console.log("Servidor en el puerto 4000");
});
