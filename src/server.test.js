const request = require("supertest");
const app = require("./server");

describe("REST API Tests", () => {
    // Test 1: Greet endpoint (default)
    test("GET /greet should return default greeting", async () => {
        const res = await request(app).get("/greet");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Hello, Guest!" });
    });

    // Test 2: Greet endpoint with name
    test("GET /greet?name=John should return personalized greeting", async () => {
        const res = await request(app).get("/greet?name=John");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Hello, John!" });
    });

    // Test 3: Sum endpoint with valid numbers
    test("POST /sum should return the sum of two numbers", async () => {
        const res = await request(app)
            .post("/sum")
            .send({ num1: 5, num2: 7 });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ sum: 12 });
    });

    // Test 4: Sum endpoint with missing parameters
    test("POST /sum should return 400 if num1 or num2 is missing", async () => {
        const res = await request(app)
            .post("/sum")
            .send({ num1: 5 });

        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: "Invalid input. Provide two numbers." });
    });

    // Test 5: Sum endpoint with invalid data type
    test("POST /sum should return 400 if non-numeric values are provided", async () => {
        const res = await request(app)
            .post("/sum")
            .send({ num1: "a", num2: 5 });

        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ error: "Invalid input. Provide two numbers." });
    });

    // Test 6: Ensure server handles large numbers correctly
    test("POST /sum should handle large numbers correctly", async () => {
        const res = await request(app)
            .post("/sum")
            .send({ num1: 1000000, num2: 2000000 });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ sum: 3000000 });
    });
});
