import { handleMovingTaskToContractor } from "../services/webhookService.js";

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
  const { asbuilt_miles, design_miles, task_id } = req.query;
  try {
    if (asbuilt_miles) {
      res.json({
        stage: "updateRoundedMilesCustomField",
        message: "Valid data",
        asbuiltMiles: asbuilt_miles,
        designMiles: design_miles,
        taskId: task_id,
      });
    } else {
      res.status(204).json({
        message: "Invalid data",
      });
    }
  } catch (error) {
    res.json({
      message: "Invalid data",
    });
  }
}
