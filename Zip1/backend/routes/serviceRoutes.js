import express from "express";
import {
  createService,
  getServices,
  getService,
  updateService,
  deleteService
} from "../controllers/serviceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",protect, createService);
router.get("/", getServices);
router.get("/:id",protect, getService);
router.put("/:id",protect, updateService);
router.delete("/:id",protect, deleteService);

export default router;