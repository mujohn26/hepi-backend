import express from 'express';
import adversoryController from '../controllers/adversory.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import BookingMiddleware from '../middlewares/booking,middleware';

const AdvesoryRoute = express.Router();
AdvesoryRoute.post('/', adversoryController.makeAdversoryRequest);
AdvesoryRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, adversoryController.getAdversories);


export default AdvesoryRoute;
