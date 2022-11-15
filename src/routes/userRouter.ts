import { Router } from "express";
import { validateDataSignUp, checkUserConflict } from "../middlewares/userMiddleware.js";
import { userSignUp } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, checkUserConflict, userSignUp);
userRouter.post("/signin");

export default userRouter;