import prisma from "../db.js";
import { Users } from "@prisma/client"; 

export type UserInsertData = Omit<Users, "id"> | { confirmPassword: string };