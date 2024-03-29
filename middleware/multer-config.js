const multer = require("multer");
// const path = require("path");

const storage = multer.memoryStorage();

const filter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new Error(`Ce fichier n'est pas une image`));
  }
};

module.exports = multer({
  storage,
  fileFilter: filter,
}).single("image");

/* const storage = multer.diskStorage({
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
}); */

// module.exports = multer({ storage }).single("image");
