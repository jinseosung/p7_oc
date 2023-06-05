const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: String, required: true },
  genre: { type: String, required: true },
  ratings: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      grade: { type: String, required: true, min: 1, max: 5 },
    },
  ],
  averageRating: { type: String, required: true, default: 0 },
});

module.exports = mongoose.model("Book", bookSchema);
