// src/sentry.js
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN || "https://b2330c5e158b3582088f464c61154a43@o4510577535090688.ingest.us.sentry.io/4510577537712128",
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV || "development",
  sendDefaultPii: true,
});

module.exports = Sentry;
