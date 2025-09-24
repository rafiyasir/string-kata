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
        const res = await request(server).get('/api/sum').query({str:"1,2"});
        expect(res.status).toBe(200);
    });

    it("should return 400 for not having query", async () => {
        const res = await request(server).get('/api/sum');
        expect(res.status).toBe(400);
    });


})