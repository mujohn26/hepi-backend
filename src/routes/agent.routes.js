import express from 'express';
import * as agentController from '../controllers/agentController';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.agent.token';
import verifyAdminToken from '../middlewares/verify.token';


import agentMiddleware from '../middlewares/agent.middleware';
import {
  activateAgent, deactivateAgent, getAllAgents, getAllAgentById, checkSpecificAgentBalance
} from '../controllers/agentController';


const agentRoute = express.Router();
agentRoute.post('/auth/signup', agentController.createAgent);

agentRoute.post('/auth/login', agentController.signin);
agentRoute.patch('/activate-account/:agentId', verifyAdminToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, agentMiddleware.checkIfAgentIsActive, activateAgent);
agentRoute.patch('/deactivate-account/:agentId', verifyAdminToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, agentMiddleware.checkIfAgentIsInactive, deactivateAgent);
agentRoute.get('/', verifyAdminToken.headerToken, VerifyAdminMiddleware.verifyAdmin, getAllAgents);
agentRoute.get('/:agentId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, getAllAgentById);
agentRoute.get('/balance', verifyToken.headerToken, checkSpecificAgentBalance);

export default agentRoute;
