import {Request, Response} from "express";
import { sum } from "../services/sum";

export const getSum = (req: Request, res: Response) => {
    const total = sum(req.query.str as string);
    return res.status(200).json({total})
}