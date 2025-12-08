import axios from "axios";
import { apiKey } from "../config/config.js";
import { makeAxiosRequest } from "../utils/axiosHelpers.js";
import clickUp from "../config/clickUp.js";
import { sendEmail } from "./emailService.js";
import { updateTask } from "../utils/clickUpApi.js";
import { getValidationFailureEmail } from "../templates/emailTemplates.js";

// Generic action handler: update a custom field by its display name
async function updateCustomFieldByName(
  taskData,
  { fieldName, description, alwaysUpdate, dateSource, listId }
) {
  console.log(
    `=== ${String(description || "Update custom field").toUpperCase()} ===`
  );

  const taskId = taskData.taskId;
  if (!taskId) {
    console.error("Missing taskId in taskData");
    return { ok: false, reason: "missing_task_id" };
  }

  // Optional list validation: if listId is provided, enforce list constraint
  if (listId) {
    const parentListId = taskData?.historyItemParentId;
    if (!parentListId || String(parentListId) !== String(listId)) {
      console.log(
        `Skipping action: parent list ${parentListId} does not match target ${listId}`
      );
      return { ok: true, skipped: true, reason: "list_mismatch" };
    }
  }

  try {
    const task = await axios({
      method: "GET",
      url: `https://api.clickup.com/api/v2/task/${taskId}`,
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
    });

    const field = task.data.custom_fields.find(
      (f) => f.name?.toLowerCase() === String(fieldName).toLowerCase()
    );

    if (!field) {
      console.error(`Custom field not found: ${fieldName}`);
      return { ok: false, reason: "field_not_found" };
    }

    if (field.value && !alwaysUpdate) {
      console.log("Field already set; skipping due to alwaysUpdate=false");
      return { ok: true, skipped: true };
    }

    let timestamp;
    if (dateSource === "historyItemDate") {
      timestamp = parseInt(taskData.historyItemDate, 10);
    } else if (dateSource === "now") {
      timestamp = Date.now();
    } else {
      timestamp = parseInt(taskData.historyItemDate, 10);
    }

    if (!timestamp || Number.isNaN(timestamp)) {
      console.error("No valid date source for update");
      return { ok: false, reason: "missing_date" };
    }

    const body = JSON.stringify({
      value: timestamp,
      value_options: { time: false },
    });
    const url = `https://api.clickup.com/api/v2/task/${taskId}/field/${field.id}`;

    console.log(
      `Updating custom field ${field.name} (${field.id}) for task ${taskId}`
    );
    const response = await makeAxiosRequest("post", url, body);

    if (!response) {
      console.error("Custom field update failed");
      return { ok: false, reason: "update_failed" };
    }

    console.log(`Updated ${field.name} for task ${taskId}`);
    return { ok: true };
  } catch (error) {
    console.error("Error in updateCustomFieldByName:", error);
    return { ok: false, reason: "exception" };
  } finally {
    console.log("================================================");
  }
}

export const ACTION_HANDLERS = {
  updateCustomFieldByName,
  validateTaskFields,
  // Future: sendEmail, callWebhook, addComment, etc.
};

// Conditional action: set a date custom field to now, only if empty and only for a specific list
// Params: { fieldId: string, listId: string, description?: string }
export async function setDateFieldNowIfEmptyForList(
  taskData,
  { fieldId, listId, description }
) {
  const taskId = taskData?.taskId;
  const parentListId = taskData?.historyItemParentId;
  console.log(
    `=== ${(
      description || "Set date field if empty (list-scoped)"
    ).toUpperCase()} ===`
  );

  if (!taskId) {
    console.error("Missing taskId in taskData");
    return { ok: false, reason: "missing_task_id" };
  }

  if (!fieldId) {
    console.error("Missing fieldId in params");
    return { ok: false, reason: "missing_field_id" };
  }

  if (!listId) {
    console.error("Missing listId in params");
    return { ok: false, reason: "missing_list_id" };
  }

  // Enforce list constraint: only proceed if webhook's parent list matches
  if (!parentListId || String(parentListId) !== String(listId)) {
    console.log(
      `Skipping action: parent list ${parentListId} does not match target ${listId}`
    );
    return { ok: true, skipped: true, reason: "list_mismatch" };
  }

  try {
    // Fetch the task using the SDK's Axios client
    const res = await clickUp.tasks.getTask(taskId);

    const hasDateQCer = (res.custom_fields || []).some(
      (cf) => cf.id === fieldId || cf.name?.toLowerCase() === "date qcer"
    );

    if (hasDateQCer) {
      console.log("Date QCer already set; skipping update");
      return { ok: true, skipped: true };
    }

    const value = Date.now();
    await clickUp.customFields.setCustomFieldValue({
      task_id: taskId,
      field_id: fieldId,
      value,
    });

    console.log(`Set Date QCer for task ${taskId}`);
    return { ok: true };
  } catch (error) {
    console.error("Error setting Date QCer:", error);
    return { ok: false, reason: "exception" };
  } finally {
    console.log("================================================");
  }
}


export async function validateTaskFields(taskData, params) {
  console.log("=== VALIDATING TASK FIELDS ===");
  const { validations, onFailure } = params;
  const taskId = taskData.taskId;

  // 1. Obtener la tarea completa con sus Custom Fields
  const task = await clickUp.tasks.getTask(taskId);
  const customFields = task.custom_fields;

  let missingFields = [];

  // 2. Ejecutar Validaciones
  for (const validation of validations) {
    const field = customFields.find(
      (f) => f.name.toLowerCase() === validation.fieldName.toLowerCase()
    );

    let isValid = false;

    if (field) {
      // Lógica específica por tipo
      if (validation.type === "number") {
        // Verifica que no sea null, undefined o string vacío. Acepta 0.
        isValid =
          field.value !== null && field.value !== undefined && field.value !== "";
      } else if (validation.type === "users") {
        isValid = field.value && field.value.length > 0;
      } else {
        // Fallback para otros tipos
        isValid = !!field.value;
      }
    }

    if (!isValid) {
      missingFields.push(validation.fieldName);
    }
  }

  // 3. Si todo está bien, continuamos
  if (missingFields.length === 0) {
    console.log("Validation passed.");
    return { ok: true };
  }

  // 4. MANEJO DE FALLO
  console.log(`Validation failed. Missing: ${missingFields.join(", ")}`);

  if (onFailure) {
    // A. Revertir Estado
    if (onFailure.targetStatus) {
      console.log(`Reverting status to: ${onFailure.targetStatus}`);
      await updateTask(taskId, { status: onFailure.targetStatus });
    }

    // B. Enviar Notificación
    const recipients = [...(onFailure.staticRecipients || [])];

    // Buscar emails dinámicos (ej. PREASBUILT QC BY)
    if (onFailure.notifyUserFields) {
      for (const userFieldName of onFailure.notifyUserFields) {
        const userField = customFields.find((f) => f.name === userFieldName);
        if (userField && userField.value && userField.value.length > 0) {
          userField.value.forEach((u) => {
            if (u.email) recipients.push(u.email);
          });
        }
      }
    }

    if (recipients.length > 0) {
      const subject = onFailure.emailSubject || `⚠️ Acción Requerida: ${task.name}`;
      
      // Usar la plantilla HTML dinámica
      const body = getValidationFailureEmail(task.name, taskId, missingFields);

      // Evitar duplicados
      const uniqueRecipients = [...new Set(recipients)];
      await sendEmail(uniqueRecipients.join(", "), subject, body);
    }
  }

  // IMPORTANTE: Retornamos stop: true para cancelar las siguientes reglas
  // Retornamos ok: true porque el handler se ejecutó correctamente (tomó la decisión de validar y parar).
  // Si devolvemos false, el controlador enviará un 500 a ClickUp y podría matar el webhook.
  return { ok: true, stop: true, reason: "validation_failed" };
}

ACTION_HANDLERS.setDateFieldNowIfEmptyForList = setDateFieldNowIfEmptyForList;
ACTION_HANDLERS.validateTaskFields = validateTaskFields;
