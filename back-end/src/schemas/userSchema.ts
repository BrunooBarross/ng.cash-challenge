import joi from "joi";
import { UserInsertData } from "../repositories/userRepository";

const userSchemaSignUp = joi.object<UserInsertData>({
    userName: joi.string().min(3).required(),
    password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/).required(),
    confirmPassword: joi.ref('password'),
});

const userSchemaSignIn = joi.object<UserInsertData>({
    userName: joi.string().min(3).required(),
    password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/).required()
});

export { userSchemaSignIn, userSchemaSignUp }