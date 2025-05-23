/**
 * Service to handle task status changes from ClickUp
 * Contains the core business logic for processing status changes
 */

/**
 * Processes a status change for a ClickUp task
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Function} callback - A callback function to execute with the processed data
 * @param {Object} taskData - Additional task data from the webhook payload
 */
export const processStatusChange = (beforeStatus, afterStatus, callback, taskData = {}) => {
  try {
    // Log the status change
    console.log(`Status changed from "${beforeStatus}" to "${afterStatus}"`);
    
    // Check for specific status transitions and apply rules
    if (afterStatus.toLowerCase() === "asbuilt ready for qc") {
      console.log("Rule triggered: Task moved to 'asbuilt ready for qc'");
      handleAsbuiltReadyForQc(taskData);
    }
    
    // Execute the callback with the status information
    // This allows for custom logic to be injected based on the specific status transition
    callback(beforeStatus, afterStatus, taskData);
    
    return true;
  } catch (error) {
    console.error("Error processing status change:", error);
    return false;
  }
};

/**
 * Default callback function for status changes (for demonstration purposes)
 * This can be replaced with custom logic for different status transitions
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Object} taskData - Additional task data from the webhook payload
 */
export const defaultStatusChangeCallback = (beforeStatus, afterStatus, taskData = {}) => {
  console.log(`Default callback executed for status change: ${beforeStatus} -> ${afterStatus}`);
  console.log("Task ID:", taskData.taskId || "Not provided");
  console.log("In the future, this callback can be replaced with custom logic for each status");
};

/**
 * Handles the specific case when a task is moved to "asbuilt ready for qc" status
 * In a real implementation, this would update a custom field in ClickUp
 * @param {Object} taskData - Data about the task from the webhook payload
 */
const handleAsbuiltReadyForQc = (taskData) => {
  console.log("=== ASBUILT READY FOR QC HANDLER ====");
  console.log(`Task ID: ${taskData.taskId || "Unknown"}`);
  console.log("Action: Would update custom field for QC readiness");
  console.log("Note: This is a placeholder for the actual API call to update the custom field");
  console.log("In a real implementation, this would make an API call to ClickUp to update the custom field");
  console.log("================================================");
};
