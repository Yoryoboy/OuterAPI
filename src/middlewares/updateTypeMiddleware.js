export const identifyUpdateType = (req, res, next) => {
  try {
    req.updateType = req.body.event;

    if (req.body.history_items && req.body.history_items.length > 0) {
      const historyItem = req.body.history_items[0];

      if (historyItem.field === "status") {
        req.updateType = "taskStatusUpdated";
        req.statusData = {
          before: historyItem.before?.status,
          after: historyItem.after?.status,
        };
      } else if (
        historyItem.field === "custom_field" &&
        historyItem.custom_field
      ) {
        req.updateType = `customField_${historyItem.custom_field.name.replace(
          /\s+/g,
          "_"
        )}`;
        req.listId = historyItem.parent_id;
        req.customFieldData = {
          fieldId: historyItem.custom_field.id,
          fieldName: historyItem.custom_field.name,
          before: historyItem.before,
          after: historyItem.after,
          fieldType: historyItem.custom_field.type,
        };
      }
    }

    next();
  } catch (error) {
    console.error("Error in update type middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
