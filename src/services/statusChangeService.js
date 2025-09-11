/**
 * Service to handle task status changes from ClickUp
 * Contains the core business logic for processing status changes
 */
import { ACTION_HANDLERS } from "./actionHandlers.js";
import { STATUS_RULES } from "./statusChangeRules.js";

/**
 * Processes a status change for a ClickUp task
 * @param {string} beforeStatus - The previous status of the task
 * @param {string} afterStatus - The new status of the task
 * @param {Function} callback - A callback function to execute with the processed data
 * @param {Object} taskData - Additional task data from the webhook payload
 */
export const processStatusChange = async (
  beforeStatus,
  afterStatus,
  callback,
  taskData = {}
) => {
  try {
    console.log("Task ID:", taskData.taskId);
    console.log(`Status changed from "${beforeStatus}" to "${afterStatus}"`);

    const actions = STATUS_RULES[afterStatus?.toLowerCase()] || [];
    const results = [];

    for (const action of actions) {
      const handler = ACTION_HANDLERS[action.type];
      if (!handler) {
        console.warn(`Unknown action type: ${action.type}`);
        results.push({ type: action.type, ok: false, reason: "unknown_action" });
        continue;
      }
      try {
        const res = await handler(taskData, action.params || {});
        results.push({ type: action.type, ...res });
      } catch (e) {
        console.error(`Action ${action.type} failed:`, e);
        results.push({ type: action.type, ok: false, reason: "exception" });
      }
    }

    if (typeof callback === "function") {
      try {
        await callback(beforeStatus, afterStatus);
      } catch (e) {
        console.warn("Callback error (non-fatal):", e);
      }
    }

    const anyFailed = results.some((r) => r.ok === false && !r.skipped);
    return {
      success: !anyFailed,
      ruleApplied: actions.length ? `Executed ${actions.length} action(s)` : "None",
      actions: results,
    };
  } catch (error) {
    console.error("Error processing status change:", error);
    return {
      success: false,
      ruleApplied: "None",
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
export const defaultStatusChangeCallback = (beforeStatus, afterStatus) => {
  console.log(
    `Callback executed for status change: ${beforeStatus} -> ${afterStatus}`
  );
};
