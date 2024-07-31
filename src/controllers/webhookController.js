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
    if (asbuilt_miles) {
      updateRoundedMiles(asbuilt_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else if (design_miles) {
      updateRoundedMiles(design_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else {
      res.status(204).json({
        stage: "updateRoundedMilesCustomField",
        message: "No asbuilt or design miles found in query",
      });
    }
  } catch (error) {
    res.json({
      stage: "updateRoundedMilesCustomField",
      message: "Invalid data",
    });
  }
}
