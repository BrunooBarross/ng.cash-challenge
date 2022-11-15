import { UserInsertData } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository.js"
import * as accountRepository from "../repositories/accountRepository.js"

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