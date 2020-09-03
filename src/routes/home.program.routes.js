import express from 'express';
import HomeProgramController from '../controllers/home.program.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';

const homeProgramRoute = express.Router();
homeProgramRoute.post('/', HomeProgramController.homeProgramRegister);
homeProgramRoute.patch('/accept/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,HomeProgramController.approveSubscription);
homeProgramRoute.patch('/reject/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,HomeProgramController.rejectSubscription);
homeProgramRoute.patch('/terminate/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,HomeProgramController.terminateSubscription);
homeProgramRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,HomeProgramController.getSubscriptions);
homeProgramRoute.get('/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,HomeProgramController.getSubscriptionById);


export default homeProgramRoute;
