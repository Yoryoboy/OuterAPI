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
    // Extract task ID from the request body
    const taskId = req.body.task_id;

    // Verify that we have the billing list ID from the middleware
    if (!req.addToList) {
      return res.status(400).json({
        success: false,
        message: "Missing billing list information",
      });
    }

    // Get the billing list ID to add the task to
    const billingListId = req.addToList.id;

    // Add the task to the billing list
    await clickUp.lists.addTaskToList(billingListId, taskId);

    // Log the successful operation
    console.log("=============================");
    console.log(
      `Task ${taskId} created in list ${
        req.parentList.name
      } added to billing list ${req.addToList.name || billingListId}`
    );
    console.log("=============================");

    // Return a success response
    return res.status(200).json({
      success: true,
      message: `Task ${taskId} created in list ${
        req.parentList.name
      } added to billing list ${req.addToList.name || billingListId}`,
      taskId: req.body.task_id,
      parentList: req.parentList.name,
      billingList: req.addToList.name || billingListId,
    });
  } catch (error) {
    // Handle different types of errors
    let errorMessage = "Internal server error";
    let statusCode = 500;

    // Check if it's an API error with response
    if (error.response) {
      errorMessage = `ClickUp API error: ${
        error.response.statusText || error.message
      }`;
      statusCode = error.response.status || 500;
    }

    // Log the error with available details
    console.error(
      "Error in task creation controller:",
      error.code || "",
      error.message || "",
      error.response?.statusText || ""
    );

    // Return an error response
    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
