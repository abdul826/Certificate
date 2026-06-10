import multer from "multer";
import path from "path";
import { fileTypeFromBuffer } from "file-type";
import fs from "fs";

/* ✅ STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ✅ VALIDATION */
export const validateFile = async (req, res, next) => {
  try {
    if (!req.file) return next();

    const buffer = fs.readFileSync(req.file.path);
    const type = await fileTypeFromBuffer(buffer);

    /* ✅ Allowed types */
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",

      "application/pdf",  // ✅ PDF
      "application/msword", // ✅ DOC
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // ✅ DOCX
    ];

    if (!type || !allowedTypes.includes(type.mime)) {
      fs.unlinkSync(req.file.path);

      return res.status(400).json({
        msg: "Invalid file type (Only Image, PDF, DOC, DOCX allowed)"
      });
    }

    next();
  } catch (err) {
    res.status(500).json({ msg: "File validation error" });
  }
};

export default upload;