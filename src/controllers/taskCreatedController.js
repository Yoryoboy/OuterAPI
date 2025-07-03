import { processNewTask } from "../services/taskCreationService.js";

/**
 * Handles task creation webhook events from ClickUp
 * Processes tasks based on their parent list, including:
 * - Adding tasks to appropriate lists
 * - Applying list-specific field updates and configurations
 *
 * @param {Object} req - Express request object with task data and list info from middleware
 * @param {Object} res - Express response object
 * @returns {Object} JSON response indicating success or failure
 */
export const handleTaskCreated = async (req, res) => {
  try {
    const taskId = req.body.task_id;
    const parentListId = req.parentListId;

    // Validate we have the necessary list information
    if (!req.addToListIds || req.addToListIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Missing target list information",
      });
    }

    // Process the task using our service
    const results = await processNewTask(taskId, parentListId, req.addToListIds);

    // Log the operation
    console.log("=============================");
    console.log(
      `Task ${taskId} created in list ${req.parentListName} processed:`
    );
    console.log(`- Added to lists: ${req.addToListNames.join(", ")}`); 
    if (results.taskUpdateResult) {
      console.log("- Applied list-specific configurations");
    }
    console.log("=============================");

    // Return success response
    return res.status(200).json({
      success: true,
      message: `Task ${taskId} processed successfully`,
      details: {
        taskId: taskId,
        parentList: req.parentListName,
        addedToLists: req.addToListNames,
        fieldsUpdated: results.taskUpdateResult ? true : false
      },
      operations: {
        listAdditions: results.addToListsResult.map(result => ({
          status: result.status,
          listId: result.value?.id || null
        })),
        fieldUpdates: results.taskUpdateResult ? true : false
      }
    });
  } catch (error) {
    // Handle errors
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
