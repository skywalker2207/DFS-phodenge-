import express from "express";
import { getPatients, getTests, getGeography } from "../controllers/client.js";

const router = express.Router();

router.get("/patients", getPatients);
router.get("/tests", getTests);
router.get("/geography", getGeography);

export default router;
