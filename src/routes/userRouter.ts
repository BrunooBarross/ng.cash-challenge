import { Router } from "express";
import { validateDataSignUp } from "../middlewares/userMiddleware.js";
const userRouter = Router();

userRouter.post("/signup", validateDataSignUp);
userRouter.post("/signin");

export default userRouter;