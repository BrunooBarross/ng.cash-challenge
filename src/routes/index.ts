import { Router } from "express";
import userRouter from "./userRouter.js";
import transactionRouter from "./transactionsRouter.js";
import balanceRouter from "./balanceRouter.js";

const router = Router();

router.use(userRouter);
router.use(transactionRouter);
router.use(balanceRouter);

export default router;