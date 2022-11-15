import prisma from "../db.js";

export async function getBalance(userId: number) {
    const account = await prisma.accounts.findFirst({
        where: {
            id: userId
        }
    });

    const transactions = await prisma.transactions.findMany({
        where: {
            OR: [
                { debitedAccountId: userId },
                { creditedAccountId: userId }
            ]
        }, orderBy: {
            createdAt: 'desc',
        }
    })

    return { account, transactions }
};