// src/middlewares/errorHandler.js

/**
 * Global error handling middleware
 * Catches all errors passed through next(err)
 */
export default function errorHandler(err, req, res, next) {
  // Log the error to console (optional: Sentry or other logging)
  console.error(err.stack || err);

  // Respond with generic 500 Internal Server Error
  res.status(500).json({
    message: "Internal Server Error",
    // Optional: include error details in development mode
    ...(process.env.NODE_ENV === "development" && { error: err.message }),
  });
}
