/**
 * Service to handle task status changes from ClickUp
 * Contains the core business logic for processing status changes
 */
import { makeAxiosRequest } from "../utils/axiosHelpers.js";
import { customFields } from "../config/customFields.js";

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
 * Updates the ASBUILT QC SUBMISSION DATE custom field with the date from the webhook payload
 * @param {Object} taskData - Data about the task from the webhook payload
 */
const handleAsbuiltReadyForQc = async (taskData) => {
  console.log("=== ASBUILT READY FOR QC HANDLER ====");
  console.log(`Task ID: ${taskData.taskId || "Unknown"}`);
  
  try {
    // Find the custom field for ASBUILT QC SUBMISSION DATE
    const qcSubmissionDateField = customFields.find(field => 
      field.name.toLowerCase() === "asbuilt qc submission date".toLowerCase()
    );
    
    if (!qcSubmissionDateField) {
      console.error("Error: ASBUILT QC SUBMISSION DATE custom field not found");
      return false;
    }
    
    // Get the date from the webhook payload's history item
    const dateFromPayload = taskData.historyItemDate;
    
    if (!dateFromPayload) {
      console.error("Error: No date found in the webhook payload");
      return false;
    }
    
    console.log(`Using date from payload: ${dateFromPayload}`);
    
    // Prepare the request to update the custom field
    const fieldId = qcSubmissionDateField.id;
    
    
    // Prepare the body with the date value
    const body = JSON.stringify({
      value: parseInt(dateFromPayload, 10),
      value_options: { time: false }
    });
    
    const url = `https://api.clickup.com/api/v2/task/${taskData.taskId}/field/${fieldId}`;
    
    console.log(`Updating custom field ${qcSubmissionDateField.name} (${fieldId}) for task ${taskData.taskId}`);
    
    // Make the API call to update the custom field
    const response = await makeAxiosRequest("post", url, body);
    
    if (response) {
      console.log(`Successfully updated ASBUILT QC SUBMISSION DATE for task ${taskData.taskId}`);
      return true;
    } else {
      console.error(`Failed to update ASBUILT QC SUBMISSION DATE for task ${taskData.taskId}`);
      return false;
    }
  } catch (error) {
    console.error("Error updating ASBUILT QC SUBMISSION DATE:", error);
    return false;
  } finally {
    console.log("================================================");
  }
};
