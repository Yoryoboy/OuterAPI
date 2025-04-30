import { defaultUser } from "../config/config.js";
import { sendEmail } from "../services/emailService.js";
import {
  handleMovingTaskToContractor,
  updateRoundedMiles,
} from "../services/webhookService.js";
import { getNoCodesEmail } from "../templates/emailTemplates.js";
import { addQcPoints, updateTask } from "../utils/clickUpApi.js";

export function add_to_contractor_list(req, res) {
  const historyItems = req.body.history_items[0];
  const user = historyItems.user.username;
  const taskId = req.body.task_id;
  const { before, after } = historyItems;
  const masterList = historyItems.parent_id;

  const task = {
    user,
    taskId,
    before,
    after,
    masterList,
  };

  handleMovingTaskToContractor(task);

  res.json({ response: task });
}

export function updateRoundedMilesCustomField(req, res) {
  try {
    const { asbuilt_miles, design_miles, task_id, action } = req.query;
    if (action === "asbuilt") {
      updateRoundedMiles(asbuilt_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else if (action === "design") {
      updateRoundedMiles(design_miles, task_id, action);
      res.status(200).json({
        stage: "updateRoundedMilesCustomField",
        message: "Asbuilt miles updated",
      });
    } else {
      res.json({
        stage: "updateRoundedMilesCustomField",
        message: "No asbuilt or design miles found in query",
      });
    }
  } catch (error) {
    res.status(500).json({
      stage: "updateRoundedMilesCustomField",
      message: "Invalid data",
      error,
    });
  }
}

export async function sendNoCodesEmail(req, res) {
  try {
    const { date, id, name, users, codes } = req.body.task;

    const to = `${users.join(", ")}, ${defaultUser}`;
    const emailBody = getNoCodesEmail(id, name, date, users, codes);
    const subject = `Tarea sin códigos: ${name}`;

    await updateTask(id, { status: "ready to send" });

    await sendEmail(to, subject, emailBody);

    return res.status(204).json({
      stage: "sendNoCodesEmail",
      message: "Email sent",
    });
  } catch (error) {
    console.error("❌ Error al enviar el email:", error);
    return res.status(500).json({
      stage: "sendNoCodesEmail",
      message: "Error al enviar el email",
      error: error.message,
    });
  }
}

export async function addQcPointsFromDesignPoints(req, res) {
  const { payload } = req.body;

  const taskId = payload.id;

  const designPointsValue = payload.fields.find(
    (field) => field.field_id === "cb50c3de-e9b0-4e1f-b9a7-7dc792192704"
  ).value;

  if (!designPointsValue) {
    return res.status(200).json({
      stage: "addQcPointsFromDesignPoints",
      message: "No se encontró ningún valor para el campo de puntos de diseño",
    });
  }

  const qcPoints = (designPointsValue * 0.5).toFixed(2);

  try {
    await addQcPoints(taskId, qcPoints);
    return res.status(204).json({
      stage: "addQcPointsFromDesignPoints",
      message: "Qc points added",
    });
  } catch (error) {
    console.error("Error adding qc points: ", error);
    res.status(500).json({
      stage: "addQcPointsFromDesignPoints",
      message: "Error adding qc points",
      error,
    });
  }
}
