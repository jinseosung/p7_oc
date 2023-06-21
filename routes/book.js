const express = require("express");
const bookCtrl = require("../controllers/book");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sharp = require('../middleware/sharp-config')

const router = express.Router();

router.get("/bestrating", bookCtrl.getRating);
router.post("/:id/rating", auth, bookCtrl.updateRating);
router.get("/", bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getBook);
router.post("/", auth, multer, sharp, bookCtrl.createBook);
router.put("/:id", auth, multer, sharp, bookCtrl.updateBook);
router.delete("/:id", auth, bookCtrl.deleteBook);

module.exports = router;
