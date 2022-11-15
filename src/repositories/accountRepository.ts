import prisma from "../db.js";

export async function generateAccount(){
    return await prisma.accounts.create({
        data: {
            balance: 100.00
        }
    });
};

export async function userCurrentBalance(id: number){
    const result = await prisma.users.findFirst({
        where: {
            id
        },
        include: {
            accounts: true
        }
    });
 
    return result.accounts; 
};

export async function incrementBalance(creditedAccountId: number, value: number){
    await prisma.accounts.update({
        where:{
            id: creditedAccountId
        },
        data: {
            balance: {
                increment: value
            }  
        }
    });
};

export async function decrementBalance(debitedAccountId: number, value: number){
    await prisma.accounts.update({
        where:{
            id: debitedAccountId
        },
        data: {
            balance: {
                decrement: value
            }  
        }
    });
};