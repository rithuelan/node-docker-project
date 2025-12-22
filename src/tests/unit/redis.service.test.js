
import { saveTask, getAllTasks, redisClient } from "../../services/redis.service.js";

describe("Redis Service", () => {

  it("should save a task", async () => {
    const task = { title: "Test Task" };

    // Mock Redis rPush
    redisClient.rPush = jest.fn().mockResolvedValue(1);

    await saveTask(task);

    expect(redisClient.rPush).toHaveBeenCalledWith("tasks", JSON.stringify(task));
  });

  it("should get all tasks", async () => {
    const task = { title: "Test Task" };

    // Mock Redis lRange
    redisClient.lRange = jest.fn().mockResolvedValue([JSON.stringify(task)]);

    const tasks = await getAllTasks();
    expect(tasks).toEqual([task]);
  });
});
