import { Router } from "express";
import { validateDataSignUp, checkUserConflict, validateDataSignIn } from "../middlewares/userMiddleware.js";
import { userLogin, userSignUp } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/signup", validateDataSignUp, checkUserConflict, userSignUp);
userRouter.post("/signin", validateDataSignIn, userLogin);

export default userRouter;