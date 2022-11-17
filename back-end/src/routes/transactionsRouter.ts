import { Router } from "express";  
import { validateToken } from "../middlewares/authMiddleware.js"; 
import { validateDataTransaction, validateUserTransaction } from "../middlewares/transactionMiddleware.js";
import { transaction } from "../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.post("/transaction", validateDataTransaction, validateToken, validateUserTransaction, transaction);

export default transactionRouter;