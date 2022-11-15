import prisma from "../db.js";

export function generateAccount(){
    return prisma.accounts.create({
        data: {
            balance: 100.00
        }
    });
}