import { Router } from "express";
import { add_to_contractor_list } from "../controllers/webhookController.js";
import { validateField } from "../middlewares/fieldValidator.js";

const router = Router();

router.post(
  "/king/add_to_contractor_list",
  validateField,
  add_to_contractor_list
);

export default router;
