import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    await userService.createUser(req.body);
    return res.sendStatus(201);
}

export async function userLogin(req: Request, res: Response){
    const data = req.body;
    const userData = await userService.signin(data);
    return res.status(200).send(userData);
}