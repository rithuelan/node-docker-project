// src/server.js
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import tasksRouter from "./routes/tasks.routes.js";
import { connectRedis } from "./services/redis.service.js";
import errorHandler from "./middlewares/errorHandler.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", tasksRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: Date.now() });
});

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

// Start server after Redis connection
async function startServer() {
  try {
    await connectRedis();
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(" Server failed to start", err);
    process.exit(1);
  }
}

startServer();
