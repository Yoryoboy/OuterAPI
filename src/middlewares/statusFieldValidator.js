/**
 * Middleware to validate if the webhook payload contains a status field update
 * If not, it returns a 204 No Content response
 */
export function validateStatusField(req, res, next) {
  try {
    // Check if history_items exists and has at least one item
    if (!req.body.history_items || !req.body.history_items.length) {
      return res.status(204).end();
    }

    // Get the first history item (assuming it's the most relevant one)
    const historyItem = req.body.history_items[0];

    // Check if the field is "status"
    if (historyItem.field !== "status") {
      return res.status(204).end();
    }

    // Continue to the next middleware
    next();
  } catch (error) {
    console.error("Error validating status field:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
