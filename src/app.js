import express, { json } from "express";
import dotenv from "dotenv";
import webhookRoutes from "./routes/webhookRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to OuterAPI",
    version: "1.0.0",
    description:
      "API developed by Jorge Diaz. Intended to be consumed by Irazu Technology.For more info, reach out to: 93jads@gmail.com",
  });
});

app.use("/webhook", webhookRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
