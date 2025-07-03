/**
 * Middleware to identify the parent list of the task
 * If not, it returns a 204 No Content response
 */
export function validateTaskCreation(req, res, next) {
  try {
    // Check if history_items exists and has at least one item
    if (!req.body.history_items || !req.body.history_items.length) {
      return res.status(204).end();
    }

    // Get the first history item (assuming it's the most relevant one)
    const historyItem = req.body.history_items[0];

    // Check if the field is "task_creation"
    if (historyItem.field !== "task_creation") {
      return res.status(204).end();
    }

    next();
  } catch (error) {
    console.error("Error identifying parent list:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
