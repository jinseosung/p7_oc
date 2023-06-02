const express = require("express");
const cors = require("cors");

const booksRoutes = require("./routes/book");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
