import { Router } from "express";  
import { validateToken } from "../middlewares/authMiddleware.js"; 
import { validateDataTransaction } from "../middlewares/transactionMiddleware.js";

const transactionRouter = Router();

transactionRouter.post("/transaction", validateDataTransaction, validateToken);

export default transactionRouter;