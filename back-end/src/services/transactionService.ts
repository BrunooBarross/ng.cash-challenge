import { TransactionInsertData } from "../repositories/transactionRepository.js";
import * as accountRepository from "../repositories/accountRepository.js";
import * as userRepository from "../repositories/userRepository.js"
import * as transactionRepository from "../repositories/transactionRepository.js"

export async function carryOutTransaction(data: TransactionInsertData) {
    const { debitedAccountId, creditedAccountId, value } = data;
    
    if(debitedAccountId === creditedAccountId){
        throw { type: "unauthorized", message: "it is not possible to transfer to the user himself" }
    };

    await hasValue(debitedAccountId, value);
    await checkExistingCreditedUser(creditedAccountId);
    await accountRepository.incrementBalance(creditedAccountId, value);
    await accountRepository.decrementBalance(debitedAccountId, value);
    await transactionRepository.insertTransaction(data);
};

async function hasValue(userId: number, value: number) {
    const result = await accountRepository.userCurrentBalance(userId);

    if (value > result.balance) {
        throw { type: "unauthorized", message: "user does not have enough balance" }
    };
};

async function checkExistingCreditedUser(id: number) {
    const creditedUser = await userRepository.findById(id);

    if (!creditedUser) {
        throw { type: "not_Found", message: "user to be credited not found" }
    }
};