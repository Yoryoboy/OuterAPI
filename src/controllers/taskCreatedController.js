import clickUp from "../config/clickUp.js";

/**
 * Handles task creation webhook events from ClickUp
 * Adds the newly created task to a corresponding billing list based on the parent list
 *
 * @param {Object} req - Express request object with task data and addToList/parentList from middleware
 * @param {Object} res - Express response object
 * @returns {Object} JSON response indicating success or failure
 */
export const handleTaskCreated = async (req, res) => {
  try {
    const taskId = req.body.task_id;

    if (req.addToLists.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Missing list information",
      });
    }

    let promises = [];

    req.addToLists.forEach((listId) => {
      promises.push(clickUp.lists.addTaskToList(listId, taskId));
    });

    await Promise.allSettled(promises);

    console.log("=============================");
    console.log(
      `Task ${taskId} created in lists ${req.parentListId} added to lists ${req.addToLists}`
    );
    console.log("=============================");

    return res.status(200).json({
      success: true,
      message: `Task ${taskId} created in lists ${req.parentListId} added to lists ${req.addToLists}`,
      taskId: req.body.task_id,
      parentList: req.parentListId,
      AddedToLists: req.addToLists,
    });
  } catch (error) {
    let errorMessage = "Internal server error";
    let statusCode = 500;

    if (error.response) {
      errorMessage = `ClickUp API error: ${
        error.response.statusText || error.message
      }`;
      statusCode = error.response.status || 500;
    }

    console.error(
      "Error in task creation controller:",
      error.code || "",
      error.message || "",
      error.response?.statusText || ""
    );

    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
