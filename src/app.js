import express, { json } from "express";
import webhookRoutes from "./routes/webhookRoutes.js";
import { port } from "./config/config.js";

const app = express();

app.use(json({ limit: "5mb" }));

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

export default app;
