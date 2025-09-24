import express from "express";
import { getSum } from "./controller/sum";

export function createApp() {
    const app = express();

    app.use(express.json());

    app.get("/api/sum",getSum);

    return app;
}