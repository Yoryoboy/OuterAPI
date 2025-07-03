import clickUp from "../config/clickUp.js";

export async function handleUpdatePodsCode(req, res) {
  try {
    const listId = req.listId;
    const { fieldName, after } = req.customFieldData;

    const customFields = await clickUp.customFields.getListCustomFields(listId);

    const highSplitCustomField = customFields?.find(
      (field) => field.name === fieldName
    );

    const highSplitId = highSplitCustomField?.type_config?.options?.find(
      (option) => option.name === "HIGH-SPLIT"
    ).id;

    const podsCustomField = customFields?.find(
      (field) => field.name === "PODS (CCI)"
    );

    const podsId = podsCustomField?.id;

    const isHighSplit = after === highSplitId;

    const value = isHighSplit
      ? podsCustomField?.type_config?.options?.find(
          (option) => option.name === "781-045"
        ).id
      : podsCustomField?.type_config?.options?.find(
          (option) => option.name === "781-043"
        ).id;

    await clickUp.customFields.setCustomFieldValue({
      task_id: req.taskId,
      field_id: podsId,
      value,
    });

    return res.status(200).json({
      success: true,
      message: `Task ${req.taskId} processed successfully`,
      details: {
        taskId: req.taskId,
        customFieldName: fieldName,
        isHighSplit,
        value,
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
      "Error in pods update code:",
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
