import { Request, Response } from "express";
import { sum } from "../services/sum";

export const getSum = (req: Request, res: Response) => {
    try {
        if (!req.query.str) {
            return res.status(400).json({ message: "Invalid request" })
        }
         const queryStr = req.query.str as string
        const total = sum(queryStr);
        return res.status(200).json({ total })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
        res.status(400).json({ message: "An unknown error occurred" });
    }
}