import { Router } from "express";
import { balance } from "../controllers/balanceController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const balanceRouter = Router();

balanceRouter.get("/balance", validateToken, balance);

export default balanceRouter;