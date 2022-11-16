import * as balanceRepository from "../repositories/balanceRepository.js"

export async function generateBalance(userId: number){
    const balance = await balanceRepository.getBalance(userId);
    return balance;
}