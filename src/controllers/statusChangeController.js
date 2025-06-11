/**
 * Controller for handling ClickUp status change webhooks
 */
import {
  processStatusChange,
  defaultStatusChangeCallback,
} from "../services/statusChangeService.js";

/**
 * Handles the status change webhook from ClickUp
 * Extracts the before and after status values and processes them
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const handleStatusChange = (req, res) => {
  try {
    const historyItem =
      req.historyItem ||
      req.body.history_items.find((item) => item.field === "status");

    const beforeStatus = historyItem.before?.status || "unknown";
    const afterStatus = historyItem.after?.status || "unknown";

    const taskData = {
      taskId: req.body.task_id,
      webhookId: req.body.webhook_id,
      historyItemId: historyItem.id,
      historyItemDate: historyItem.date,
      user: historyItem.user,
    };

    const result = processStatusChange(
      beforeStatus,
      afterStatus,
      defaultStatusChangeCallback,
      taskData
    );

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: `Status change processed: ${beforeStatus} -> ${afterStatus}`,
        taskId: req.body.task_id,
        ruleApplied: result.ruleApplied,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Error processing status change",
      });
    }
  } catch (error) {
    console.error("Error in status change controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
