const express = require("express");
const bookCtrl = require("../controllers/book");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", bookCtrl.getAllBooks);
router.get("/:id", bookCtrl.getBook);
router.get("/bestrating", bookCtrl.getRating);
router.post("/", auth, bookCtrl.createBook);
router.put("/:id", auth, bookCtrl.updateBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.post("/:id/rating", auth, bookCtrl.updateRating);

module.exports = router;
