import { Router } from "express";  
import { validateToken } from "../middlewares/authMiddleware.js"; 
import { validateDataTransaction } from "../middlewares/transactionMiddleware.js";
import { transaction } from "../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.post("/transaction", validateDataTransaction, validateToken, transaction);

export default transactionRouter;