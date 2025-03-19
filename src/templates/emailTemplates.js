export const getNoCodesEmail = (id, name, date, users, codes) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #333; text-align: center;">🔔 Notificación de Tarea</h2>
    <p>Hola,</p>
    <p>La tarea <strong>${name}</strong> (<strong>ID: ${id}</strong>) fue movida al estado:</p>

    <div style="background-color: #4466ff; color: white; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
      SENT
    </div>

    <p>Sin embargo, esta tarea no tiene códigos asociados, por lo que ha sido automáticamente devuelta al estado:</p>

    <div style="background-color: #b660e0; color: white; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
      READY TO SEND
    </div>

    <p>Por favor, revisa la tarea y añade el código correspondiente antes de volver a marcarla como <strong>enviada</strong>.</p>

    <p><strong>Detalles de la tarea:</strong></p>
    <ul style="background: #f9f9f9; padding: 10px; border-radius: 8px; list-style-type: none;">
      <li><strong>ID:</strong> ${id}</li>
      <li><strong>Nombre:</strong> ${name}</li>
      <li><strong>Fecha:</strong> ${date}</li>
      <li><strong>Usuarios Asignados:</strong> ${users.join(", ")}</li>
      <li><strong>Códigos:</strong> ${
        codes.length > 0 ? codes.join(", ") : "Ninguno"
      }</li>
    </ul>

    <p>Puedes acceder a la tarea en ClickUp haciendo clic en el siguiente enlace:</p>
    <p style="text-align: center;">
      <a href="https://app.clickup.com/t/${id}" style="display: inline-block; padding: 10px 20px; color: white; background-color: #4466ff; text-decoration: none; border-radius: 5px; font-weight: bold;">
        📌 Ver Tarea
      </a>
    </p>

    <p>Gracias.</p>
    <p><strong>Equipo de ClickUp</strong></p>
  </div>
`;
