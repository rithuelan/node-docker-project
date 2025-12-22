import { saveData, getAllData, getDataById } from "../services/redis.service.js";

/**
 * POST /api/data
 * Body: { id, name, price }
 */
export async function createData(req, res) {
  try {
    const item = req.body;

    if (!item.id) item.id = Date.now(); // Generate unique id if missing

    await saveData(item);
    res.status(201).json({ message: "Data stored in Redis", data: item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * GET /api/data
 */
export async function fetchAllData(req, res) {
  try {
    const data = await getAllData();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

/**
 * GET /api/data/:id
 */
export async function fetchDataById(req, res) {
  try {
    const id = req.params.id;
    const data = await getDataById(id);

    if (!data) return res.status(404).json({ message: "Not found" });

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
