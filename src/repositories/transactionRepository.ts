import prisma from "../db.js";
import { Transactions } from "@prisma/client"; 

export type TransactionInsertData = Omit<Transactions, "id" | "createdAt">;

export async function insertTransaction(data: TransactionInsertData){
    await prisma.transactions.create({
        data: {
            ...data
        }
    });
};