import { NextFunction, Request, Response } from "express";
import { transactionSchema } from "../schemas/transactionSchmea";

export function validateDataTransaction(req: Request, res: Response, next: NextFunction){
    const { error } = transactionSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}