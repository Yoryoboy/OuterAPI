import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 3000;
export const apiKey = process.env.API_KEY;
export const smtpUser = process.env.SMTP_USER;
export const smtpPass = process.env.SMTP_PASS;
export const smtpHost = process.env.SMTP_HOST;
export const smtpPort = process.env.SMTP_PORT;
