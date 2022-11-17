import { NextFunction, Request, Response } from "express";
import { transactionSchema } from "../schemas/transactionSchmea.js";
import * as userRepository from "../repositories/userRepository.js"

export function validateDataTransaction(req: Request, res: Response, next: NextFunction){
    const { error } = transactionSchema.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
};

export async function validateUserTransaction(req: Request, res: Response, next: NextFunction){
    const findUser = await userRepository.findUser(req.body.userName);

    if(!findUser){
        throw { type: "not_Found", message: "User Not Found"};
    }

    res.locals.creditAccountId = findUser.id;   

    next();
};