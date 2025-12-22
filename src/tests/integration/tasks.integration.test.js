// src/tests/integration/tasks.integration.test.js
import request from "supertest";
import app from "../../app.js";
import { connectRedis, redisClient } from "../../services/redis.service.js";

beforeAll(async () => {
  await connectRedis();
});

afterAll(async () => {
  await redisClient.flushDb(); // clean up
  await redisClient.quit();
});

describe("Tasks API Integration", () => {
  it("should create a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Task saved successfully");
  });

  it("should get all tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body.tasks).toEqual([{ title: "Test Task" }]);
  });
});
