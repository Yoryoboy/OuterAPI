import { processPaymentStatusUpdate } from "../services/paymentStatusService.js";

export const handlePaymentStatusUpdate = async (req, res) => {
  try {
    const taskId = req.taskId || req.body.task_id;
    const paymentStatusOptionId = req.customFieldData?.after;

    const result = await processPaymentStatusUpdate({
      taskId,
      paymentStatusOptionId,
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
      const statusCode = result.statusCode || 500;
      return res.status(statusCode).json({
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
    console.error("Error handling payment status update:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
