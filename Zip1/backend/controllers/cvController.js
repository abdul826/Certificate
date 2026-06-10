import CV from "../models/CV.js";
import fs from "fs";
import path from "path";

/* ✅ UPLOAD / REPLACE CV */
export const uploadCV = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ msg: "No file uploaded" });

    /* ✅ Find existing CV */
    const existingCV = await CV.findOne();

    if (existingCV) {
      /* ✅ DELETE OLD FILE from uploads */
      const oldPath = path.join("uploads", existingCV.file);

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }

      /* ✅ DELETE OLD DB ENTRY */
      await CV.deleteMany();
    }

    /* ✅ SAVE NEW CV */
    const newCV = await CV.create({
      file: req.file.filename,
    });

    res.json({
      msg: "CV uploaded successfully ✅",
      data: newCV,
    });

  } catch (error) {
    res.status(500).json({ msg: "Upload failed", error });
  }
};

/* ✅ GET CV (latest) */

export const getCV = async (req, res) => {
  const cv = await CV.findOne().sort({ createdAt: -1 });

  if (!cv) return res.status(404).json({ msg: "No CV found" });

  res.json({
    file: `${req.protocol}://${req.get("host")}/uploads/${cv.file}`
  });
};

/* ✅ DELETE CV */
export const deleteCV = async (req, res) => {
  const cv = await CV.findById(req.params.id);

  if (!cv) return res.status(404).json("Not found");

  /* ✅ delete file */
  fs.unlinkSync(`uploads/${cv.file}`);

  await cv.deleteOne();

  res.json({ msg: "CV deleted" });
};
