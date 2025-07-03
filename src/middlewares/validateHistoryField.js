/**
 * Generic middleware factory to validate if the webhook payload contains a specific field update
 * Returns a middleware function that checks for the specified field in history_items
 *
 * @param {string} fieldName - The field name to check for in history_items
 * @param {string} errorMessage - Custom error message for logging (defaults to "Error validating field")
 * @returns {Function} Express middleware function
 */
export function validateHistoryField(
  fieldName,
  errorMessage = "Error validating field"
) {
  return (req, res, next) => {
    try {
      if (!req.body.history_items || !req.body.history_items.length) {
        return res.status(204).end();
      }

      const historyItem = req.body.history_items.find(
        (item) => item.field === fieldName
      );

      if (!historyItem) {
        return res.status(204).end();
      }

      req.historyItem = historyItem;

      next();
    } catch (error) {
      console.error(`${errorMessage}:`, error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

// Pre-configured middleware instances for common field validations

export const validateStatusField = validateHistoryField(
  "status",
  "Error validating status field"
);

export const validateTaskCreation = validateHistoryField(
  "task_creation",
  "Error validating task creation"
);
