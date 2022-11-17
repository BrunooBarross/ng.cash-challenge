import { Request, Response } from "express";
import * as transactionService from "../services/transactionService.js"

export async function transaction(req: Request, res: Response){
    const userId = res.locals.userId;
    const creditedAccountId = res.locals.creditAccountId;
    const data = {debitedAccountId: parseInt(userId), creditedAccountId: parseInt(creditedAccountId), value: req.body.value}
    await transactionService.carryOutTransaction(data);
    return res.sendStatus(200);
}