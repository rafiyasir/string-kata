import { Server } from "http";
import request from "supertest";
import { createApp } from "../../src/app";

let server: Server;

beforeAll(async () => {
    const app = createApp();
    server = app.listen();
});

afterAll(async () => {
    server?.close();
});

describe("String Kata API", () => {
    it("should return 200 for /api/sum", async () => {
        const res = await request(server).get('/api/sum');
        expect(res.status).toBe(200);
    })
})