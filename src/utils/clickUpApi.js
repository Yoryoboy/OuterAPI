import dotenv from "dotenv";
import { getContractorListId } from "./helperFunctions.js";
import { makeAxiosRequest } from "./axiosHelpers.js";
import { CCI_HS_LIST } from "../config/listsDetails.js";
import { apiKey } from "../config/config.js";

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

export async function updateAsbuiltMiles(miles, taskId) {
  const customField = {
    id: "d281788f-5911-4954-82db-3616de342644",
    name: "ASBUILT ROUNDED MILES",
    type: "number",
  };

  const teamId = CCI_HS_LIST.team.id;
  const fieldId = customField.id;
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: teamId,
  }).toString();
  const body = JSON.stringify({ value: miles });
  const url = `https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}?${query}`;

  try {
    const response = await makeAxiosRequest("post", url, body);
    if (response) {
      console.log(
        `Se han actualizado las millas asbuilt de la tarea ${taskId}`
      );
    } else {
      console.error("Error al actualizar las millas asbuilt", error);
    }
  } catch (error) {
    console.error("Error al actualizar las millas asbuilt", error);
  }
}

export async function updateDesignMiles(miles, taskId) {
  const customField = {
    id: "e1edd040-64af-4036-8012-9b9c29fc5f11",
    name: "DESIGN ROUNDED MILES",
    type: "number",
  };

  const teamId = CCI_HS_LIST.team.id;
  const fieldId = customField.id;
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: teamId,
  }).toString();
  const body = JSON.stringify({ value: miles });
  const url = `https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}?${query}`;

  try {
    const response = await makeAxiosRequest("post", url, body);
    if (response) {
      console.log(`Se han actualizado las millas diseño de la tarea ${taskId}`);
    } else {
      console.error("Error al actualizar las millas diseño", error);
    }
  } catch (error) {
    console.error("Error al actualizar las millas diseño", error);
  }
}
export async function updateTask(taskId, body) {
  const options = {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(body),
  };

  const url = `https://api.clickup.com/api/v2/task/${taskId}`;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating task status:", error);
  }
}
