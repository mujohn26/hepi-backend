import express from 'express';
import * as agentController from '../controllers/agentController';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import agentMiddleware from '../middlewares/agent.middleware';
import { activateAgent, deactivateAgent, getAllAgents, getAllAgentById } from '../controllers/agentController';


const agentRoute = express.Router();
agentRoute.post('/auth/signup', agentController.createAgent);


agentRoute.patch('/activate-account/:agentId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, agentMiddleware.checkIfAgentIsActive, activateAgent);
agentRoute.patch('/deactivate-account/:agentId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, agentMiddleware.checkIfAgentIsInactive, deactivateAgent);
agentRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, getAllAgents);
agentRoute.get('/:agentId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, getAllAgentById);

export default agentRoute;