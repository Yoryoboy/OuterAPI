import {
  HIGH_SPLIT_AUTOMATION_EVENT,
  HIGH_SPLIT_AUTOMATION_FIELD_IDS,
} from "../config/highSplitAutomationConfig.js";

export function identifyUpdateType(req, res, next) {
  try {
    if (req.body.history_items && req.body.history_items.length > 0) {
      const event = req.body.event;
      const historyItem = req.body.history_items[0];

      if (event === "taskUpdated" && historyItem.field === "status") {
        req.updateType = "taskStatusUpdated";
        req.statusData = {
          before: historyItem.before?.status,
          after: historyItem.after?.status,
        };
      } else if (
        event === "taskUpdated" &&
        historyItem.field === "custom_field" &&
        historyItem.custom_field
      ) {
        const fieldId = historyItem.custom_field.id;
        const normalizedFieldName = historyItem.custom_field.name.replace(
          /\s+/g,
          "_"
        );

        req.updateType = `customField_${normalizedFieldName}`;
        req.listId = historyItem.parent_id;
        req.taskId = req.body.task_id;
        req.customFieldData = {
          fieldId,
          fieldName: historyItem.custom_field.name,
          before: historyItem.before,
          after: historyItem.after,
          fieldType: historyItem.custom_field.type,
        };

        if (HIGH_SPLIT_AUTOMATION_FIELD_IDS.has(fieldId)) {
          req.updateType = HIGH_SPLIT_AUTOMATION_EVENT;
          req.highSplitFieldId = fieldId;
        }
      } else if (event === "taskCreated") {
        req.updateType = "taskCreated";
      }
    }

    next();
  } catch (error) {
    console.error("Error in update type middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
