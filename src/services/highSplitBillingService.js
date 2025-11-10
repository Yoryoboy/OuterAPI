import clickUp from "../config/clickUp.js";
import {
  HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID,
} from "../config/highSplitAutomationConfig.js";

const normalizeNumber = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "number") {
    return Number.isNaN(value) ? null : value;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed.length) {
      return null;
    }

    const numeric = Number(trimmed);
    return Number.isNaN(numeric) ? null : numeric;
  }

  if (typeof value === "object") {
    if (value.value !== undefined) {
      return normalizeNumber(value.value);
    }

    if (value.amount !== undefined) {
      return normalizeNumber(value.amount);
    }
  }

  return null;
};

const getDropdownValue = (field) => {
  if (!field) {
    return null;
  }

  if (typeof field.value === "string") {
    return field.value;
  }

  if (typeof field.value === "object" && field.value !== null) {
    if (typeof field.value.id === "string") {
      return field.value.id;
    }
    if (typeof field.value.value === "string") {
      return field.value.value;
    }
  }

  return null;
};

const getField = (collection, fieldId) =>
  collection?.find((field) => field.id === fieldId);

export async function processHighSplitBillingUpdate({
  taskId,
  customFieldId,
  updatedValue,
}) {
  if (!taskId || !customFieldId) {
    return {
      success: false,
      statusCode: 400,
      message: "Missing task or field identifiers",
    };
  }

  const fieldContext = HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID[customFieldId];

  if (!fieldContext) {
    return {
      success: true,
      skipped: true,
      message: "Field not managed by high split automation",
      data: { taskId, customFieldId },
    };
  }

  const { automation, fieldRole } = fieldContext;

  try {
    const task = await clickUp.tasks.getTask(taskId);
    const customFields = task?.custom_fields || [];

    const statusField = getField(customFields, automation.statusField.id);
    const metricField = getField(customFields, automation.metricField.id);

    let statusValue = getDropdownValue(statusField);
    let metricValue = normalizeNumber(metricField?.value);

    if (fieldRole === "status" && updatedValue !== undefined) {
      statusValue = updatedValue;
    }

    if (fieldRole === "metric" && updatedValue !== undefined) {
      metricValue = normalizeNumber(updatedValue);
    }

    const readyToBill =
      statusValue === automation.statusField.readyOptionId &&
      statusValue !== automation.statusField.billedOptionId;
    const metricIsZero = metricValue === 0;

    if (!readyToBill || !metricIsZero) {
      return {
        success: true,
        skipped: true,
        message: "Billing automation criteria not met",
        data: {
          taskId,
          segment: automation.segment,
          statusValue,
          metricValue,
          readyToBill,
          metricIsZero,
        },
      };
    }

    await clickUp.customFields.setCustomFieldValue({
      task_id: taskId,
      field_id: automation.statusField.id,
      value: automation.statusField.billedOptionId,
    });

    return {
      success: true,
      message: `Marked ${automation.segment} billing status as billed`,
      data: {
        taskId,
        segment: automation.segment,
        updatedFieldId: automation.statusField.id,
        triggerFieldRole: fieldRole,
      },
    };
  } catch (error) {
    console.error("Error processing high split billing automation:", error);

    return {
      success: false,
      statusCode: error.response?.status || 500,
      message:
        error.response?.statusText ||
        error.message ||
        "Error updating billing status",
      error:
        process.env.NODE_ENV === "development"
          ? error.response?.data || error.message
          : undefined,
    };
  }
}
