const express = require("express");
const bookCtrl = require("../controllers/book");

const router = express.Router();

router.get("/", bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getBook);
router.get("/bestrating", bookCtrl.getRating);
router.post("/", bookCtrl.createBook);
router.put("/:id", bookCtrl.updateBook);
router.delete("/:id", bookCtrl.deleteBook);
router.post("/:id/rating", bookCtrl.updateRating);

module.exports = router;
