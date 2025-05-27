/**
 * Service to handle task status changes from ClickUp
 * Contains the core business logic for processing status changes
 */
import { makeAxiosRequest } from "../utils/axiosHelpers.js";
import axios from "axios";
import { apiKey } from "../config/config.js";

const STATUS_RULES = {
  "asbuilt ready for qc": {
    fieldName: "first asbuilt qc submission date 1",
    description: "Update first asbuilt qc submission date 1"
  },
  "design ready for qc": {
    fieldName: "first design qc submission date 1",
    description: "Update first design qc submission date 1"
  }
};

/**
 * Processes a status change for a ClickUp task
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Function} callback - A callback function to execute with the processed data
 * @param {Object} taskData - Additional task data from the webhook payload
 */
export const processStatusChange = (
  beforeStatus,
  afterStatus,
  callback,
  taskData = {}
) => {
  try {
    console.log("Task ID:", taskData.taskId);
    console.log(`Status changed from "${beforeStatus}" to "${afterStatus}"`);

    let ruleApplied = "None";
    const statusRule = STATUS_RULES[afterStatus.toLowerCase()]

    if (statusRule) {
      ruleApplied = statusRule.description;
      console.log(`Rule triggered: ${ruleApplied}`);
      handleUpdateQcDate(taskData, statusRule);
    }

    callback(beforeStatus, afterStatus);

    return {
      success: true,
      ruleApplied
    };
  } catch (error) {
    console.error("Error processing status change:", error);
    return {
      success: false,
      ruleApplied: "None"
    };
  }
};

/**
 * Default callback function for status changes (for demonstration purposes)
 * This can be replaced with custom logic for different status transitions
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Object} taskData - Additional task data from the webhook payload
 */
export const defaultStatusChangeCallback = (
  beforeStatus,
  afterStatus,
) => {
  console.log(
    `Callback executed for status change: ${beforeStatus} -> ${afterStatus}`
  );
};

/**
 * Handles the specific case when a task is moved to "asbuilt ready for qc" status
 * Updates the ASBUILT QC SUBMISSION DATE custom field with the date from the webhook payload
 * @param {Object} taskData - Data about the task from the webhook payload
 */
const handleUpdateQcDate = async (taskData, statusRule) => {
  console.log(`=== ${statusRule.description.toUpperCase()} HANDLER ====`);
  console.log(`Task ID: ${taskData.taskId || "Unknown"}`);

  try {
    const task = await axios({
      method: "GET",
      url: `https://api.clickup.com/api/v2/task/${taskData.taskId}`,
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
    });

    const qcSubmissionDateField = task.data.custom_fields.find(
      (field) =>
        field.name.toLowerCase() ===
        statusRule.fieldName.toLowerCase()
    );

    if (!qcSubmissionDateField) {
      console.error(`Error: ${statusRule.fieldName} custom field not found`);
      return false;
    }

    if (qcSubmissionDateField.value) {
      console.log(`QC submission date already set, skipping update`);
      return true;
    }

    const dateFromPayload = taskData.historyItemDate;

    if (!dateFromPayload) {
      console.error(`Error: No date found in the webhook payload`);
      return false;
    }

    console.log(`Using date from payload: ${dateFromPayload}`);

    const fieldId = qcSubmissionDateField.id;

    const body = JSON.stringify({
      value: parseInt(dateFromPayload, 10),
      value_options: { time: false },
    });

    const url = `https://api.clickup.com/api/v2/task/${taskData.taskId}/field/${fieldId}`;

    console.log(
      `Updating custom field ${qcSubmissionDateField.name} (${fieldId}) for task ${taskData.taskId}`
    );

    // Make the API call to update the custom field
    const response = await makeAxiosRequest("post", url, body);

    if (response) {
      console.log(
        `Successfully updated ${qcSubmissionDateField.name} for task ${taskData.taskId}`
      );
      return true;
    } else {
      console.error(
        `Failed to update ${qcSubmissionDateField.name} for task ${taskData.taskId}`
      );
      return false;
    }
  } catch (error) {
    console.error("Error updating custom field: ", error);
    return false;
  } finally {
    console.log("================================================");
  }
};
