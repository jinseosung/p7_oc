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
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateBook = (req, res, next) => {
  const bookObject = req.file
  ? {
      ...JSON.parse(req.body.book),
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    }
  : { ...req.body };

delete bookObject._userId;

Book.findOne({ _id: req.params.id })
  .then((book) => {
    if (book.userId != req.auth.userId) {
      res.status(401).json({ message: "Non autorisé" });
      return;
    }
    Book.updateOne(
      { _id: req.params.id },
      { ...bookObject, _id: req.params.id }
    )
      .then(() => {
        res.status(200).json({ message: "Livre modifié" });
      })
      .catch((error) => res.status(401).json({ error }));
  })
  .catch((error) => res.status(400).json({ error }));

};

exports.getRating = (req, res, next) => {
  res.status(200).json({ message: "getrating" });
};

exports.updateRating = (req, res, next) => {
  res.status(200).json({ message: "updaterating" });
};
