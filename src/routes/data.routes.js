import express from "express";
import { createData, fetchAllData, fetchDataById } from "../controllers/data.controller.js";

const router = express.Router();

router.post("/data", createData);
router.get("/data", fetchAllData);
router.get("/data/:id", fetchDataById);

export default router;
