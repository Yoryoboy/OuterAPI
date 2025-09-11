/**
 * Middleware to validate if the new status is in the list of valid statuses
 * If not, it returns a 204 No Content response
 */
import { STATUS_RULES } from "../services/statusChangeRules.js";

export function validateValidStatus(req, res, next) {
  try {
    const validStatuses = Object.keys(STATUS_RULES);

    const historyItem =
      req.historyItem ||
      (Array.isArray(req.body.history_items)
        ? req.body.history_items.find((i) => i.field === "status")
        : undefined);

    const status = historyItem?.after?.status?.toLowerCase();

    if (!status || !validStatuses.includes(status)) {
      return res.status(204).end();
    }

    next();
  } catch (error) {
    console.error("Error validating status value:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
