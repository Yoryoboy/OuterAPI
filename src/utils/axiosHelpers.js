import axios from "axios";

export function handleAxiosError(error) {
  if (error.response) {
    console.error(
      `Error del servidor: ${error.response.status} ${error.response.data}`
    );
  } else if (error.request) {
    console.error("No se recibió respuesta del servidor.");
  } else {
    console.error(`Error al configurar la solicitud: ${error.message}`);
  }
}

export async function makeAxiosRequest(method, url, data = {}) {
  try {
    const response = await axios({
      method,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
      data,
    });

    if ([200, 201, 204].includes(response.status)) {
      return response.data;
    } else {
      console.error(
        `Error inesperado: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    handleAxiosError(error);
  }
}
