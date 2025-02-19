import {
  addTaskToList,
  removeTaskFromList,
  updateAsbuiltMiles,
  updateDesignMiles,
} from "../utils/clickUpApi.js";
import { contractorKingCustomField } from "../config/contractors.js";

function findContractorById(contractorId) {
  const contractor = contractorKingCustomField.find(
    (contractor) => contractor.id === contractorId
  );
  return contractor;
}

export async function handleMovingTaskToContractor(task) {
  const oldContractor = findContractorById(task.before);
  const newContractor = findContractorById(task.after);

  if (task.before) {
    await removeTaskFromList(task, oldContractor);
  }
  if (task.after) {
    await addTaskToList(task, newContractor);
  }
}

export async function updateRoundedMiles(miles, taskId, action) {
  try {
    if (action === "asbuilt") {
      await updateAsbuiltMiles(miles, taskId);
    } else if (action === "design") {
      await updateDesignMiles(miles, taskId);
      await updateAsbuiltMiles(miles, taskId); // agregado en el nuevo update. Solo se setean las millas cuando se envia el design y tiene que concordar con las asbuilt miles.
    }
  } catch (error) {
    console.error("Error updating miles", error);
  }
}
