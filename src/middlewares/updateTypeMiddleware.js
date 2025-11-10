import {
  HIGH_SPLIT_AUTOMATION_EVENT,
  HIGH_SPLIT_AUTOMATION_FIELD_IDS,
} from "../config/highSplitAutomationConfig.js";

const findHistoryItem = (items, predicate) =>
  items.find((item) => {
    try {
      return predicate(item);
    } catch {
      return false;
    }
  });

export function identifyUpdateType(req, res, next) {
  try {
    const historyItems = Array.isArray(req.body.history_items)
      ? req.body.history_items
      : [];

    if (historyItems.length === 0) {
      return next();
    }

    const event = req.body.event;

    const statusHistoryItem = findHistoryItem(
      historyItems,
      (item) => item.field === "status"
    );

    if (event === "taskUpdated" && statusHistoryItem) {
      req.updateType = "taskStatusUpdated";
      req.statusData = {
        before: statusHistoryItem.before?.status,
        after: statusHistoryItem.after?.status,
      };
      return next();
    }

    const highSplitHistoryItem = findHistoryItem(
      historyItems,
      (item) =>
        item.field === "custom_field" &&
        item.custom_field &&
        HIGH_SPLIT_AUTOMATION_FIELD_IDS.has(item.custom_field.id)
    );

    const genericCustomFieldItem =
      highSplitHistoryItem ||
      findHistoryItem(
        historyItems,
        (item) => item.field === "custom_field" && item.custom_field
      );

    if (event === "taskUpdated" && genericCustomFieldItem) {
      const fieldId = genericCustomFieldItem.custom_field.id;
      const normalizedFieldName = genericCustomFieldItem.custom_field.name.replace(
        /\s+/g,
        "_"
      );

      req.updateType = `customField_${normalizedFieldName}`;
      req.listId = genericCustomFieldItem.parent_id;
      req.taskId = req.body.task_id;
      req.customFieldData = {
        fieldId,
        fieldName: genericCustomFieldItem.custom_field.name,
        before: genericCustomFieldItem.before,
        after: genericCustomFieldItem.after,
        fieldType: genericCustomFieldItem.custom_field.type,
      };

      if (highSplitHistoryItem && fieldId === highSplitHistoryItem.custom_field.id) {
        req.updateType = HIGH_SPLIT_AUTOMATION_EVENT;
        req.highSplitFieldId = fieldId;
      }

      return next();
    }

    if (event === "taskCreated") {
      req.updateType = "taskCreated";
    }

    next();
  } catch (error) {
    console.error("Error in update type middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
