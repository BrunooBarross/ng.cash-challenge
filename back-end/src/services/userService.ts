import { UserInsertData } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js"
import * as accountRepository from "../repositories/accountRepository.js"
import jwt from "jsonwebtoken";

export async function createUser(userData: UserInsertData){
    userData.password = encryptedPassword(userData.password);
    delete userData.confirmPassword;
    const account = await generateAccount();
    userData['accountId'] = account.id;
    await userRepository.createUser(userData);
}

function encryptedPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

async function generateAccount(){
    return await accountRepository.generateAccount();
}

export async function signin(userData: UserInsertData){
    const user =  await getUser(userData.userName);
    comparePassword(userData.password, user.password);
    const data = { userId: user.id };
    const config = { expiresIn: 60 * 60 * 24 };
    const token = jwt.sign(data, process.env.JWT_SECRET, config);
    return { token: token, userName: user.userName};
}

async function getUser(userName: string){
    const user = await userRepository.findUser(userName);
    if (!user) {
        throw { type: "not_Found", message: `userName ${userName} not found`}
    }
    return user;
}

function comparePassword(password: string, encryptedPassword: string){
    if (!bcrypt.compareSync(password, encryptedPassword)){
        throw { type: "unauthorized", message: "incorrect password"}
    }
}