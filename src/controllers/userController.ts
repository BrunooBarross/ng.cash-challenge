import { Request, Response } from "express";
import * as userService from "../services/userService.js"

export async function userSignUp(req: Request, res: Response) {
    await userService.createUser(req.body);
    return res.sendStatus(201);
}
