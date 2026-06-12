import express from "express"
import { createEvent, getHistory } from "../controllers/eventController.js";

const router=express.Router();
router.post("/generate",createEvent);
router.get("/history",getHistory);

export default router;