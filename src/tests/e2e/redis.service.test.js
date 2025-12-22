import request from "supertest";
import app from "../../app.js";
import { redisClient } from "../../services/redis.service.js";

describe("Tasks E2E", () => {

  it("should create and retrieve a task from Redis", async () => {
    const task = { title: "Test Task" };

    // Mock rPush and lRange
    redisClient.rPush = jest.fn().mockResolvedValue(1);
    redisClient.lRange = jest.fn().mockResolvedValue([JSON.stringify(task)]);

    // Create task
    const createRes = await request(app).post("/api/tasks").send(task);
    expect(createRes.statusCode).toBe(201);

    // Get tasks
    const getRes = await request(app).get("/api/tasks");
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.tasks).toEqual([task]);
  });
});
