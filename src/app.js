import express, { json } from "express";
import cors from "cors";
import webhookRoutes from "./routes/webhookRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { port } from "./config/config.js";

const app = express();

const corsOptions = {
  origin: ["https://irazu-tools.onrender.com", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(json({ limit: "5mb" }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to OuterAPI",
    version: "1.0.0",
    description:
      "API developed by Jorge Diaz. Intended to be consumed by Irazu Technology.For more info, reach out to: 93jads@gmail.com",
  });
});

app.use("/auth", authRoutes);
app.use("/webhook", webhookRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

export default app;
