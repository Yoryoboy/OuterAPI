import { addTaskToList, removeTaskFromList } from "../utils/clickUpApi.js";
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
