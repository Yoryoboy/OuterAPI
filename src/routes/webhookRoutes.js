import { Router } from "express";
import {
  add_to_contractor_list,
  updateRoundedMilesCustomField,
  sendNoCodesEmail,
  addQcPointsFromDesignPoints,
} from "../controllers/webhookController.js";
import { validateField } from "../middlewares/fieldValidator.js";
import {
  validateCciMiles,
  validateSentTask,
} from "../middlewares/validateCciMiles.js";
import { eventRouter } from "../middlewares/eventRouterMiddleware.js";
import { executeEventHandler } from "../middlewares/eventHandlerMiddleware.js";
import { buildEventHandlers } from "../handlers/eventHandlers.js";
import { identifyUpdateType } from "../middlewares/updateTypeMiddleware.js";

const router = Router();
const eventHandlers = buildEventHandlers();

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
  "/cci/webhook",
  identifyUpdateType,
  eventRouter(eventHandlers),
  executeEventHandler
);

export default router;
