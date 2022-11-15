import { NextFunction, Request, Response } from "express";
import { userSchemaSignIn, userSchemaSignUp } from "../schemas/userSchema.js";
import * as userRepository from "../repositories/userRepository.js"

export function validateDataSignUp(req: Request, res: Response, next: NextFunction){
    const { error } = userSchemaSignUp.validate(req.body);

    if (error) {
        throw { type: "unprocessable_entity", message: error.details[0].message }
    }

    next();
}

export async function checkUserConflict(req: Request, res: Response, next: NextFunction){
    const user = await userRepository.findUser(req.body.userName);

    if(user){
        throw { type: "conflict", message: "username unavailable" }
    }  
    
    next();
}

export function validateDataSignIn(req: Request, res: Response, next: NextFunction){
    const { error } = userSchemaSignIn.validate(req.body);

    if (error) {
        throw { type: "unauthorized", message: error.details[0].message }
    }

    next();
}