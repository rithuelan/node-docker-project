import request from "supertest";
import app from "../../app.js";

describe("Error Handler Middleware", () => {
  it("should handle errors and return 500", async () => {
    const res = await request(app).get("/error-test");
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty("message", "Internal Server Error");
  });
});
