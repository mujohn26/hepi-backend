import express from 'express';
import BookingController from '../controllers/booking.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
const bookingRoute = express.Router();
bookingRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingController.getAllRequests);
bookingRoute.get('/:status', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingController.getRequestByStatus);
bookingRoute.get('/service/:serviceName', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingController.getRequestByService);


export default bookingRoute;