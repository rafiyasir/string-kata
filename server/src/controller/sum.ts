import { Request, Response } from "express";
import { sum } from "../services/sum";

export const getSum = (req: Request, res: Response) => {
    try {
        if (!req.query.str) {
            return res.status(400).json({ message: "Invalid request" })
        }
        const total = sum(req.query.str as string);
        return res.status(200).json({ total })
    } catch (error) {
        res.status(400).json(error)
    }
}