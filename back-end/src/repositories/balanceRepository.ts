import prisma from "../db.js";

export async function getBalance(id: number) {
    const account = await prisma.accounts.findFirst({
        where: {
            id
        }
    });

    const transactions = await prisma.accounts.findUnique({
        where: { id },
        select: {
            transactionsDebit: {
                select: {
                    id: true,
                    value: true,
                    creditedAccountId: true,
                    debitedAccountId: true,
                    debited: { select: { users: { select: { userName: true } } } },
                    credited: { select: { users: { select: { userName: true } } } },
                    createdAt: true,
                },
                orderBy: { createdAt: "desc" },
            },
            transactionsCredit: {
                select: {
                    id: true,
                    value: true,
                    creditedAccountId: true,
                    debitedAccountId: true,
                    debited: { select: { users: { select: { userName: true } } } },
                    credited: { select: { users: { select: { userName: true } } } },
                    createdAt: true,
                },
                orderBy: { createdAt: "desc" },
            },
        },
    })
    return { account, transactions: transactions.transactionsDebit.concat(transactions.transactionsCredit).reverse()}
};

async function userSender(id: number){
    return await prisma.users.findFirst({
        select:{
            userName: true
        },where:{
            id: id
        }
    });
};