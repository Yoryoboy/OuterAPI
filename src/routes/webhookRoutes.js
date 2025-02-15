import { Router } from "express";
import {
  add_to_contractor_list,
  updateRoundedMilesCustomField,
} from "../controllers/webhookController.js";
import { validateField } from "../middlewares/fieldValidator.js";
import { validateCciMiles } from "../middlewares/validateCciMiles.js";

const router = Router();

router.post(
  "/king/add_to_contractor_list",
  validateField,
  add_to_contractor_list
);

router.post(
  "/cci/round_miles",
  validateCciMiles,
  updateRoundedMilesCustomField
);

export default router;
