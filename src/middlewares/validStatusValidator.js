/**
 * Middleware to validate if the new status is in the list of valid statuses
 * If not, it returns a 204 No Content response
 */
export const validateValidStatus = (req, res, next) => {
  try {
    // List of valid statuses
    const validStatuses = [
      "asbuilt in progress", 
      "design in progress", 
      "asbuilt sent",
      "asbuilt ready for qc"
    ];

    // Get the first history item
    const historyItem = req.body.history_items[0];
    
    // Check if after.status exists and is in the list of valid statuses
    if (!historyItem.after || 
        !historyItem.after.status || 
        !validStatuses.includes(historyItem.after.status.toLowerCase())) {
      return res.status(204).end();
    }

    // Continue to the next middleware
    next();
  } catch (error) {
    console.error("Error validating status value:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
