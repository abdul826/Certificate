import express from "express";
import upload, { validateFile } from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  uploadCV,
  getCV,
  deleteCV
} from "../controllers/cvController.js";

const router = express.Router();

/* ✅ GET */
router.get("/", getCV);

/* ✅ ADMIN UPLOAD */

router.post(
  "/",
  protect,
  upload.single("cv"),
  validateFile,
  uploadCV
);

/* ✅ DELETE */
router.delete("/:id", protect, deleteCV);

export default router;