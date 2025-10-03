import clickUp from "../config/clickUp.js";

const CUSTOM_FIELD_IDS = {
  invoiceAmount: "5c48e443-8e7d-4be5-a870-00ee107ba97a",
  firstPayment: "92055859-8e02-4060-823c-d51184fa26fd",
  secondPayment: "8d3c2a42-0af1-4254-bd84-5b0eab3336b0",
};

const PAYMENT_STATUS_OPTIONS = {
  pending: "76019401-2271-46f2-8a11-2d74ab33616b",
  partialPayment: "6ee29f66-c207-4211-9675-dfc71a149cb6",
  paid: "28050973-25f0-4193-a7da-8acc58ba1506",
};

const PAYMENT_STATUS_RULES = {
  [PAYMENT_STATUS_OPTIONS.partialPayment]: {
    label: "PARTIAL PAYMENT",
    targetFieldId: CUSTOM_FIELD_IDS.firstPayment,
    targetFieldName: "FIRST PAYMENT",
    percentage: 0.9,
  },
  [PAYMENT_STATUS_OPTIONS.paid]: {
    label: "PAID",
    targetFieldId: CUSTOM_FIELD_IDS.secondPayment,
    targetFieldName: "SECOND PAYMENT",
    percentage: 0.1,
    useRemainder: true,
  },
};

const roundCurrency = (value) => {
  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) {
    return null;
  }
  return Math.round(numericValue * 100) / 100;
};

const extractCurrencyValue = (field) => {
  if (!field || field.value === null || field.value === undefined) {
    return null;
  }

  if (typeof field.value === "number") {
    return field.value;
  }

  if (typeof field.value === "string") {
    const parsed = Number(field.value);
    return Number.isNaN(parsed) ? null : parsed;
  }

  if (typeof field.value === "object") {
    if (typeof field.value.amount === "number") {
      return field.value.amount;
    }

    if (typeof field.value.value === "number") {
      return field.value.value;
    }

    if (typeof field.value.value === "string") {
      const parsed = Number(field.value.value);
      return Number.isNaN(parsed) ? null : parsed;
    }
  }

  return null;
};

const setCurrencyFieldValue = async (taskId, fieldId, value) => {
  await clickUp.customFields.setCustomFieldValue({
    task_id: taskId,
    field_id: fieldId,
    value,
  });
};

export const processPaymentStatusUpdate = async ({
  taskId,
  paymentStatusOptionId,
}) => {
  if (!taskId) {
    return {
      success: false,
      statusCode: 400,
      message: "Missing task identifier",
    };
  }

  if (!paymentStatusOptionId) {
    return {
      success: false,
      statusCode: 400,
      message: "Missing payment status identifier",
      data: { taskId },
    };
  }

  const rule = PAYMENT_STATUS_RULES[paymentStatusOptionId];

  if (!rule) {
    return {
      success: true,
      skipped: true,
      message: "Payment status change not handled",
      data: { taskId, paymentStatusOptionId },
    };
  }

  try {
    const task = await clickUp.tasks.getTask(taskId);
    const customFields = task?.custom_fields || [];

    const invoiceField = customFields.find(
      (field) => field.id === CUSTOM_FIELD_IDS.invoiceAmount
    );
    const invoiceAmount = extractCurrencyValue(invoiceField);

    if (invoiceAmount === null) {
      return {
        success: true,
        skipped: true,
        message: "Invoice amount not available; skipping payment automation",
        data: {
          taskId,
          paymentStatus: rule.label,
        },
      };
    }

    let targetValue = roundCurrency(invoiceAmount * rule.percentage);

    if (targetValue === null) {
      return {
        success: false,
        statusCode: 500,
        message: "Unable to calculate payment value",
      };
    }

    if (rule.useRemainder) {
      const firstPaymentField = customFields.find(
        (field) => field.id === CUSTOM_FIELD_IDS.firstPayment
      );
      const firstPaymentValue = extractCurrencyValue(firstPaymentField);

      if (firstPaymentValue !== null) {
        const remainder = roundCurrency(invoiceAmount - firstPaymentValue);
        if (remainder !== null && remainder >= 0) {
          targetValue = remainder;
        }
      }
    }

    await setCurrencyFieldValue(taskId, rule.targetFieldId, targetValue);

    return {
      success: true,
      message: `Updated ${rule.targetFieldName} for task ${taskId}`,
      data: {
        taskId,
        paymentStatus: rule.label,
        invoiceAmount: roundCurrency(invoiceAmount),
        updatedFieldId: rule.targetFieldId,
        updatedFieldName: rule.targetFieldName,
        updatedValue: targetValue,
      },
    };
  } catch (error) {
    console.error("Error processing payment status update:", error);

    return {
      success: false,
      statusCode: error.response?.status || 500,
      message:
        error.response?.statusText || error.message || "Error updating payment fields",
      error:
        process.env.NODE_ENV === "development" ? error.response?.data || error.message : undefined,
    };
  }
};
