import express from 'express';
import MperekezaController from '../controllers/mperekeza.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';

const mperekezaRoute = express.Router();
mperekezaRoute.post('/', MperekezaController.mperekezaRegister);
mperekezaRoute.patch('/accept/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,MperekezaController.approveSubscription);
mperekezaRoute.patch('/reject/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,MperekezaController.rejectSubscription);
mperekezaRoute.patch('/terminate/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,MperekezaController.terminateSubscription);
mperekezaRoute.get('/',MperekezaController.getSubscriptions);
mperekezaRoute.get('/:subscriptionId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,MperekezaController.getSubscriptionById);


export default mperekezaRoute;
