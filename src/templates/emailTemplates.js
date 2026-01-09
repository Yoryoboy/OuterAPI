export const getNoCodesEmail = (id, name, date, users, codes) => `
  <div style="font-family: Arial, sans-serif; max-width: 480px; width: 90%; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #333; text-align: center;">🔔 Notificación de Tarea</h2>
    <p>Hola,</p>
    <p>La tarea <strong>${name}</strong> (<strong>ID: ${id}</strong>) fue movida al estado:</p>

    <div style="background-color: #4466ff; 
            color: white; 
            padding: 5px 15px; 
            border-radius: 8px; 
            text-align: center; 
            font-weight: bold;
            display: inline-block;
            max-width: 200px;">
  SENT
</div>

    <p>Sin embargo, esta tarea no tiene códigos asociados, por lo que ha sido automáticamente devuelta al estado:</p>

    <div style="background-color: #b660e0; 
            color: white; 
            padding: 5px 15px; 
            border-radius: 8px; 
            text-align: center; 
            font-weight: bold;
            display: inline-block;
            max-width: 200px;">
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
    <p><strong>Irazu Technology</strong></p>
  </div>
`;

export const getValidationFailureEmail = (taskName, taskId, missingFields) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 550px; width: 95%; margin: auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0px 4px 15px rgba(0,0,0,0.05); background-color: #ffffff;">
    
    <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #d32f2f; margin: 0; font-size: 24px;">⛔ Acción Requerida</h2>
        <p style="color: #666; font-size: 14px; margin-top: 5px;">Validación de Tarea Fallida</p>
    </div>

    <p style="color: #333; font-size: 16px; line-height: 1.5;">Hola,</p>
    
    <p style="color: #333; font-size: 16px; line-height: 1.5;">
        La tarea <strong>"${taskName}"</strong> no pudo avanzar de estado debido a que faltan datos obligatorios.
    </p>

    <div style="background-color: #ffebee; border-left: 5px solid #d32f2f; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p style="color: #d32f2f; font-weight: bold; margin: 0 0 10px 0;">⚠️ Campos faltantes:</p>
        <ul style="margin: 0; padding-left: 20px; color: #b71c1c;">
            ${missingFields.map((field) => `<li style="margin-bottom: 5px;">${field}</li>`).join("")}
        </ul>
    </div>

    <p style="color: #333; font-size: 16px; line-height: 1.5;">
        El estado de la tarea ha sido revertido automáticamente para permitir las correcciones. 
        Por favor, complete estos campos y vuelva a intentar mover la tarea.
    </p>

    <div style="text-align: center; margin-top: 30px; margin-bottom: 20px;">
      <a href="https://app.clickup.com/t/${taskId}" 
         style="background-color: #d32f2f; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; transition: background-color 0.3s;">
        🔗 Corregir Tarea en ClickUp
      </a>
    </div>

    <hr style="border: 0; height: 1px; background: #eee; margin: 25px 0;">

    <p style="color: #888; font-size: 12px; text-align: center;">
        Irazu Technology Notification System<br>
        Este es un mensaje automático, por favor no responder a este correo.
    </p>
  </div>
`;
