import express from 'express';
import counselingController from '../controllers/counseling.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import BookingMiddleware from '../middlewares/booking,middleware';

const CounselingRoute = express.Router();
CounselingRoute.post('/', counselingController.makeCounselingRequest);
CounselingRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, counselingController.getCounselings);


export default CounselingRoute;
