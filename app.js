const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uri =
  "mongodb+srv://p7_oc:p7_OC@monvieuxgrimoire.bhqzffn.mongodb.net/?retryWrites=true&w=majority";

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

module.exports = app;
