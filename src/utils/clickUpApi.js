import axios from "axios";
import dotenv from "dotenv";

import { getContractorListId } from "./helperFunctions.js";

dotenv.config();

const apiKey = process.env.API_KEY;

export async function removeTaskFromList(task, oldContractor) {
  const { name } = oldContractor;
  const { user, taskId } = task;
  const listId = getContractorListId(task, oldContractor);

  try {
    const response = await axios.delete(
      `https://api.clickup.com/api/v2/list/${listId}/task/${taskId}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    if (response.status === 200 || response.status === 204) {
      console.log(
        `${user} ha removido la tarea ${taskId} de la lista de ${name}`
      );
    } else {
      console.log(
        `Error inesperado: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error(
        `Error del servidor: ${error.response.status} ${error.response.data}`
      );
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor.");
    } else {
      // Algo ocurrió al configurar la solicitud que desencadenó un error
      console.error(`Error al configurar la solicitud: ${error.message}`);
    }
  }
}

export async function addTaskToList(task, newContractor) {
  const { name } = newContractor;
  const { user, taskId } = task;
  const listId = getContractorListId(task, newContractor);
  try {
    const response = await axios.post(
      `https://api.clickup.com/api/v2/list/${listId}/task/${taskId}`,
      {}, // Cuerpo vacío
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    if (response.status === 200 || response.status === 201) {
      console.log(
        `${user} ha agregado la tarea ${taskId} a la lista de ${name}`
      );
    } else {
      console.log(
        `Error inesperado: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error(
        `Error del servidor: ${error.response.status} ${error.response.data}`
      );
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error("No se recibió respuesta del servidor.");
    } else {
      // Algo ocurrió al configurar la solicitud que desencadenó un error
      console.error(`Error al configurar la solicitud: ${error.message}`);
    }
  }
}
