import prisma from "../db.js";
import { Users } from "@prisma/client"; 

export type UserInsertData = Omit<Users, "id"> & { confirmPassword: string };

export async function createUser(userData: UserInsertData) {
    await prisma.users.create({
        data:{
            ...userData
        }
    });
};

export async function findUser(userName: string){
    return prisma.users.findFirst({
        where: {
            userName
        }
    });
};

export async function findById(id: number){
    return await prisma.users.findFirst({
        where:{
            id
        }
    })
}