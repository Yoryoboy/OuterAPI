import nodemailer from "nodemailer";
import { smtpHost, smtpPort, smtpUser, smtpPass } from "./config.js";

export const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: Number(smtpPort),
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

// Probar la conexión al servidor SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error("Error al conectar con SMTP:", error);
  } else {
    console.log("¡Servidor SMTP listo para enviar correos!");
  }
});
