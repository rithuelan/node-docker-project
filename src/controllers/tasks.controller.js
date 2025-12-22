import { saveTask, getAllTasks } from "../services/redis.service.js";

export async function createTask(req, res) {
  const task = req.body;
  if (!task?.title) return res.status(400).json({ message: "Task title is required" });

  await saveTask(task);
  res.status(201).json({ message: "Task saved successfully" });
}

export async function getTasks(req, res) {
  const tasks = await getAllTasks();
  res.status(200).json({ tasks });
}
