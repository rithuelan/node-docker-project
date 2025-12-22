import express from "express";
import tasksRoutes from "./routes/tasks.routes.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(logger);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Tasks API routes
app.use("/api/tasks", tasksRoutes);

// Test route to trigger errors for Jest
app.get("/error-test", (req, res, next) => {
  const err = new Error("Test Error");
  next(err);
});

// 404 handler (after all routes)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler (after 404)
app.use(errorHandler);

export default app;
