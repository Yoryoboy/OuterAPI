/**
 * Controller for handling ClickUp status change webhooks
 */
import { processStatusChange, defaultStatusChangeCallback } from "../services/statusChangeService.js";

/**
 * Handles the status change webhook from ClickUp
 * Extracts the before and after status values and processes them
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const handleStatusChange = (req, res) => {
  try {
    // Get the first history item (we've already validated it exists and has field="status")
    const historyItem = req.body.history_items[0];
    
    // Extract the before and after status values
    const beforeStatus = historyItem.before?.status || "unknown";
    const afterStatus = historyItem.after?.status || "unknown";
    
    // Prepare task data to pass to the service
    const taskData = {
      taskId: req.body.task_id,
      webhookId: req.body.webhook_id,
      historyItemId: historyItem.id,
      historyItemDate: historyItem.date, // Extract the date from the history item
      user: historyItem.user
    };
    
    // Process the status change using the service
    // For now, we're using the default callback, but this could be customized later
    const result = processStatusChange(
      beforeStatus,
      afterStatus,
      defaultStatusChangeCallback,
      taskData
    );
    
    // If processing was successful, return a success response
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: `Status change processed: ${beforeStatus} -> ${afterStatus}`,
        taskId: req.body.task_id,
        ruleApplied: result.ruleApplied
      });
    } else {
      // If there was an error in processing, return an error response
      return res.status(500).json({
        success: false,
        message: "Error processing status change"
      });
    }
  } catch (error) {
    console.error("Error in status change controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
