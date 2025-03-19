import { transporter } from "../config/emailConfig.js"; // Importamos el transporter

export const sendEmail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Irazu Notificaciones" <no-reply@irazutechnology.com>`,
      to,
      subject,
      html,
    });

    console.log("✅ Correo enviado con éxito:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
  }
};
