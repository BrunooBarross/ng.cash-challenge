import { Request, Response } from "express";
import * as balanceService from "../services/balanceService.js"

export async function balance(req: Request, res: Response) {
    const userId = res.locals.userId;
    const balance = await balanceService.generateBalance(parseInt(userId));
    return res.status(200).send(balance);
};