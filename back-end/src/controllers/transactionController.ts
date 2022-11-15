import { Request, Response } from "express";
import * as transactionService from "../services/transactionService.js"

export async function transaction(req: Request, res: Response){
    const userId = res.locals.userId;
    const data = {debitedAccountId: parseInt(userId), ...req.body}
    await transactionService.carryOutTransaction(data);
    return res.sendStatus(200);
}