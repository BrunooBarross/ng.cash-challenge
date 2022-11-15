import { number } from "joi";
import * as balanceRepository from "../repositories/balanceRepository.js"

export async function generateBalance(userId: number){
    return await balanceRepository.getBalance(userId);
}