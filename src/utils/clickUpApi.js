import dotenv from "dotenv";
import { getContractorListId } from "./helperFunctions.js";
import { makeAxiosRequest } from "./axiosHelpers.js";

dotenv.config();

export async function removeTaskFromList(task, oldContractor) {
  const { name } = oldContractor;
  const { user, taskId } = task;
  const listId = getContractorListId(task, oldContractor);

  const url = `https://api.clickup.com/api/v2/list/${listId}/task/${taskId}`;

  const response = await makeAxiosRequest("delete", url);
  if (response) {
    console.log(
      `${user} ha removido la tarea ${taskId} de la lista de ${name}`
    );
  }
}

export async function addTaskToList(task, newContractor) {
  const { name } = newContractor;
  const { user, taskId } = task;
  const listId = getContractorListId(task, newContractor);

  const url = `https://api.clickup.com/api/v2/list/${listId}/task/${taskId}`;

  const response = await makeAxiosRequest("post", url, {});
  if (response) {
    console.log(`${user} ha agregado la tarea ${taskId} a la lista de ${name}`);
  }
}
