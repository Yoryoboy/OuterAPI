import express, { json } from "express";
import dotenv from "dotenv";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use("/webhook", webhookRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
