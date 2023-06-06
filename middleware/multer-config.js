const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    if (file.mimetype.split("/")[0] !== "image") {
      callback(new Error(`Ce fichier n'est pas une image`));
      return;
    }
    const name = file.originalname.split(" ").join("_");
    const ext = path.extname(file.originalname);
    callback(null, name + Date.now() + ext);
  },
});

module.exports = multer({ storage }).single("image");
