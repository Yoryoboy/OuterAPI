import { Router } from "express";
import { getAuthToken } from "../controllers/authController.js";

const router = Router();

router.post("/token", getAuthToken);

export default router;
