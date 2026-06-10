import express from "express";
import {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial
} from "../controllers/testimonialController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",protect, createTestimonial);
router.get("/", getTestimonials);
router.get("/:id",protect, getTestimonial);
router.put("/:id",protect, updateTestimonial);
router.delete("/:id", protect,deleteTestimonial);

export default router;