/**
 * Service to handle task status changes from ClickUp
 * Contains the core business logic for processing status changes
 */

/**
 * Processes a status change for a ClickUp task
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Function} callback - A callback function to execute with the processed data
 */
export const processStatusChange = (beforeStatus, afterStatus, callback) => {
  try {
    // Log the status change
    console.log(`Status changed from "${beforeStatus}" to "${afterStatus}"`);
    
    // Execute the callback with the status information
    // This allows for custom logic to be injected based on the specific status transition
    callback(beforeStatus, afterStatus);
    
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
 */
export const defaultStatusChangeCallback = (beforeStatus, afterStatus) => {
  console.log(`Default callback executed for status change: ${beforeStatus} -> ${afterStatus}`);
  console.log("In the future, this callback can be replaced with custom logic for each status");
};
