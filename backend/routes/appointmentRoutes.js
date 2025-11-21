import express from "express";
import { createAppointment, getAppointments } from "../controllers/appointmentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, createAppointment);
router.get("/", protect, getAppointments);

export default router;
