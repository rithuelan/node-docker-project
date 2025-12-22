import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379/1"
});

redisClient.on("error", (err) => {
  console.error(" Redis Error:", err);
});

/**
 * Explicit Redis connection
 */
export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log(" Redis connected (DB1)");
  }
}

const KEY = "product-app";

export async function saveTask(task) {
  await redisClient.rPush(KEY, JSON.stringify(task));
}

export async function getAllTasks() {
  const tasks = await redisClient.lRange(KEY, 0, -1);
  return tasks.map(JSON.parse);
}


