import { validateHistoryField } from "./validateHistoryField.js";

const baseCustomFieldValidator = validateHistoryField(
  "custom_field",
  "Error validating custom field history"
);

/**
 * Middleware that ensures the webhook contains a custom field history item.
 * Adds both historyItem and customFieldHistoryItem to the request for clarity.
 */
export function validateCustomFieldHistory(req, res, next) {
  return baseCustomFieldValidator(req, res, () => {
    req.customFieldHistoryItem = req.historyItem;
    next();
  });
}
