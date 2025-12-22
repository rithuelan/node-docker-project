// src/services/redis.service.js
import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379"
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log(" Redis connected");
  }
}

export async function saveTask(task) {
  await redisClient.rPush("tasks", JSON.stringify(task));
}

export async function getAllTasks() {
  const tasks = await redisClient.lRange("tasks", 0, -1);
  return tasks.map((t) => JSON.parse(t));
}
