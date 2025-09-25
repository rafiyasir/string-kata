import express from "express";
import { getSum } from "./controller/sum";

export function createApp() {
    const app = express();

    app.use(express.json());

    app.get("/",(req,res)=>res.status(200).json({ status: 'ok' }));

    app.get("/sum",getSum);

    return app;
}