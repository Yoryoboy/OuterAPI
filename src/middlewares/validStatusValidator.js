/**
 * Middleware to validate if the new status is in the list of valid statuses
 * If not, it returns a 204 No Content response
 */
export function validateValidStatus(req, res, next) {
  try {
    const validStatuses = [
      "asbuilt ready for qc",
      "design ready for qc",
      "redesign ready for qc",
      "redesign sent",
      "asbuilt sent",
      "sent",
      "ready for qc",
    ];

    const historyItem = req.body.history_items[0];

    if (
      !historyItem.after ||
      !historyItem.after.status ||
      !validStatuses.includes(historyItem.after.status.toLowerCase())
    ) {
      return res.status(204).end();
    }

    next();
  } catch (error) {
    console.error("Error validating status value:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
