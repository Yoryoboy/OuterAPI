import clickUp from "../config/clickUp";

export async function handleUpdatePodsCode(req, res) {
  try {
    const listId = req.listId;
    const { fieldName, after } = req.customFieldData;

    const customFields = await clickUp.customFields.getListCustomFields(listId);
    const customField = customFields.find((field) => field.name === fieldName);

    const isHighSplit =
      after ===
      customField?.type_config?.options?.find(
        (option) => option.name === "HIGH-SPLIT"
      ).id;

    if (isHighSplit) {
      console.log("IS HIGH SPLIT");
    }

    return res.status(200).json({
      success: true,
      message: `Task ${req.taskId} processed successfully`,
      details: {
        taskId: req.taskId,
        customFieldName: fieldName,
        isHighSplit,
      },
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
}
