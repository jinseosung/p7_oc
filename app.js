const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const uri = process.env.DB_URL;

const booksRoutes = require("./routes/book");
const userRoutes = require("./routes/user");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
