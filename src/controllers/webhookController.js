import {
  handleMovingTaskToContractor,
  updateRoundedMiles,
} from "../services/webhookService.js";

export function add_to_contractor_list(req, res) {
  const historyItems = req.body.history_items[0];
  const user = historyItems.user.username;
  const taskId = req.body.task_id;
  const { before, after } = historyItems;
  const masterList = historyItems.parent_id;

  const task = {
    user,
    taskId,
    before,
    after,
    masterList,
  };

  handleMovingTaskToContractor(task);

  res.json({ response: task });
}

export function updateRoundedMilesCustomField(req, res) {
  try {
    const { asbuilt_miles, design_miles, task_id, action } = req.query;
    if (action === "asbuilt") {
      updateRoundedMiles(asbuilt_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else if (action === "design") {
      updateRoundedMiles(design_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else {
      res.json({
        stage: "updateRoundedMilesCustomField",
        message: "No asbuilt or design miles found in query",
      });
    }
  } catch (error) {
    res.status(500).json({
      stage: "updateRoundedMilesCustomField",
      message: "Invalid data",
    });
  }
}
