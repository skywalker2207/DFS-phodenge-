import express from "express";
import { getCustomers, getTests, getGeography } from "../controllers/client.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/tests", getTests);
router.get("/geography", getGeography);

export default router;
