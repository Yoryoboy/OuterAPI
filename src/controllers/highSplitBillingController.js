import { processHighSplitBillingUpdate } from "../services/highSplitBillingService.js";

export const handleHighSplitBillingAutomation = async (req, res) => {
  try {
    const taskId = req.taskId || req.body.task_id;
    const customFieldId = req.customFieldData?.fieldId;
    const updatedValue = req.customFieldData?.after;

    const result = await processHighSplitBillingUpdate({
      taskId,
      customFieldId,
      updatedValue,
    });

    if (result.skipped) {
      return res.status(200).json({
        success: true,
        skipped: true,
        message: result.message,
        data: result.data,
      });
    }

    if (!result.success) {
      return res.status(result.statusCode || 500).json({
        success: false,
        message: result.message,
        data: result.data,
        error: result.error,
      });
    }

    return res.status(200).json({
      success: true,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    console.error("Error handling high split billing automation:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
