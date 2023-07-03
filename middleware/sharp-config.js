const sharp = require("sharp");
const path = require("path");

const sharpConfig = (req, res, next) => {
  if (req.file) {
    const buffer = req.file.buffer;
    const originalFileName = path.parse(req.file.originalname).name;
    const newFileName = `${originalFileName}${Date.now()}.webp`;
    req.file.filename = newFileName;

    sharp(buffer).resize({ width: 360 }).toFile(`images/${newFileName}`);
  }
  next();
};

module.exports = sharpConfig;
