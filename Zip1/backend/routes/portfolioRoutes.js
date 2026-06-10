import express from "express";
import {
  createPortfolio,
  getPortfolio,
  getSinglePortfolio,
  updatePortfolio,
  deletePortfolio
} from "../controllers/portfolioController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/* PUBLIC */
router.get("/", getPortfolio);
router.get("/:id", getSinglePortfolio);

/* ADMIN ONLY */
router.post("/", protect, upload.single("image"), createPortfolio);
router.put("/:id", protect, updatePortfolio);
router.delete("/:id", protect, deletePortfolio);

export default router;