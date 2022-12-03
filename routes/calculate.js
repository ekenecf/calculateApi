import express from "express";
import {
  createCalculation,
  getAllCalculations,
} from "../controllers/calculate.js";

const router = express.Router();

router.route("/").get(getAllCalculations).post(createCalculation);

export default router;
