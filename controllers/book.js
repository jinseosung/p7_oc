const Book = require("../models/book");

exports.createBook = (req, res, next) => {
  const bookObject = JSON.parse(req.body.book);
  delete bookObject._id;
  const book = new Book({
    ...bookObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  book
    .save()
    .then(() => res.status(201).json({ message: "Livre enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json({ error }));

};

exports.getBook = (req, res, next) => {
  res.status(200).json({ message: "getbook" });
};

exports.updateBook = (req, res, next) => {
  res.status(200).json({ message: "updatebook" });
};

exports.getRating = (req, res, next) => {
  res.status(200).json({ message: "getrating" });
};

exports.updateRating = (req, res, next) => {
  res.status(200).json({ message: "updaterating" });
};
