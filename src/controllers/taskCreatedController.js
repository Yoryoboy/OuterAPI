import clickUp from "../config/clickUp.js";

export const handleTaskCreated = async (req, res) => {
  try {
    const taskId = req.body.task_id;
    const billingListId = req.addToList.id;
    await clickUp.lists.addTaskToList(billingListId, taskId);

    console.log("=============================");
    console.log(
      `Task ${taskId} created in list ${req.parentList.name} added to list ${req.addToList.name}`
    );
    console.log("=============================");

    return res.status(200).json({
      success: true,
      message: `Task ${taskId} created in list ${req.parentList.name} added to list ${req.addToList.name}`,
      taskId: req.body.task_id,
    });
  } catch (error) {
    console.error(
      "Error in task creation controller:",
      error.code,
      error.response.statusText
    );
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
