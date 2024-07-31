import dotenv from "dotenv";
import { getContractorListId } from "./helperFunctions.js";
import { makeAxiosRequest } from "./axiosHelpers.js";
import { CCI_HS_LIST } from "../config/listsDetails.js";

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
    type_config: {},
    date_created: "1722442786414",
    hide_from_guests: false,
    required: false,
  };

  const teamId = CCI_HS_LIST.team.id;
  const fieldId = customField.id;
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: teamId,
  }).toString();
  const body = JSON.stringify({ value: miles });
  const url = `https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}?${query}`;

  const response = await makeAxiosRequest("post", url, body);
  if (response) {
    console.log(`Se han actualizado las millas asbuilt de la tarea ${taskId}`);
  }
}

export async function updateDesignMiles(miles, taskId) {
  const customField = {
    id: "e1edd040-64af-4036-8012-9b9c29fc5f11",
    name: "DESIGN ROUNDED MILES",
    type: "number",
    type_config: {},
    date_created: "1722442806835",
    hide_from_guests: false,
    required: false,
  };

  const teamId = CCI_HS_LIST.team.id;
  const fieldId = customField.id;
  const query = new URLSearchParams({
    custom_task_ids: "true",
    team_id: teamId,
  }).toString();
  const body = JSON.stringify({ value: miles });
  const url = `https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}?${query}`;

  const response = await makeAxiosRequest("post", url, body);
  if (response) {
    console.log(`Se han actualizado las millas asbuilt de la tarea ${taskId}`);
  }
}
