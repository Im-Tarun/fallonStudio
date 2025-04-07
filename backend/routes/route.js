import express from "express";
import { addFeedback, getFeedback } from "../controllers/controller.js";


const router = express.Router()

router.get('/feedbacks', getFeedback);
router.post('/submit-feedbacks', addFeedback);

export default router