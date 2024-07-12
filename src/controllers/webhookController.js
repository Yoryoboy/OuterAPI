import { handleMovingTaskToContractor } from "../services/webhookService.js";

export function add_to_contractor_list(req, res) {
  const historyItems = req.body.history_items[0];

  const user = historyItems.user.username;
  const taskId = req.body.task_id;
  const { before, after } = historyItems;

  const task = {
    user,
    taskId,
    before,
    after,
  };

  handleMovingTaskToContractor(task);

  res.json({ response: task });
}
