import { Router } from "express";
import {
  add_to_contractor_list,
  updateRoundedMilesCustomField,
  sendNoCodesEmail,
  addQcPointsFromDesignPoints,
} from "../controllers/webhookController.js";
import { handleStatusChange } from "../controllers/statusChangeController.js";
import { validateField } from "../middlewares/fieldValidator.js";
import {
  validateCciMiles,
  validateSentTask,
} from "../middlewares/validateCciMiles.js";
import { validateStatusField } from "../middlewares/statusFieldValidator.js";
import { validateValidStatus } from "../middlewares/validStatusValidator.js";

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

router.post("/cci/add_qc_points", addQcPointsFromDesignPoints);

router.post("/cci/validate_sent_task", validateSentTask, sendNoCodesEmail);

router.post(
  "/cci/status_change",
  validateStatusField,
  validateValidStatus,
  handleStatusChange
);

export default router;
