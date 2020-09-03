import express from "express";
import * as agentController from "../controllers/agentController";
import VerifyAdminMiddleware from "../middlewares/verify.admin";
import verifyToken from "../middlewares/verify.agent.token";
import verifyAdminToken from "../middlewares/verify.token";

import { checkSpecificAgentBalance,getAllAgentCashes, adminChangeBalanceStatus,agentChangeBalanceStatus,agentAcceptBalanceStatus } from "../controllers/agentController";

const agentRoute = express.Router();

agentRoute.get("/agent", verifyToken.headerToken, checkSpecificAgentBalance);
agentRoute.get("/", verifyAdminToken.headerToken, VerifyAdminMiddleware.verifyAdmin,getAllAgentCashes);
agentRoute.patch("/:balanceId/admin", verifyAdminToken.headerToken, VerifyAdminMiddleware.verifyAdmin,adminChangeBalanceStatus);
agentRoute.patch("/:balanceId/agent", verifyToken.headerToken,agentChangeBalanceStatus);
agentRoute.patch("/:balanceId/accept", verifyToken.headerToken,agentAcceptBalanceStatus);


export default agentRoute;
