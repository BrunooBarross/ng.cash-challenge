import { NextFunction, Request, Response } from "express";
import { userSchemaSignIn, userSchemaSignUp } from "../schemas/userSchema.js";

export function validateDataSignUp(req: Request, res: Response, next: NextFunction){
    const { error } = userSchemaSignUp.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}