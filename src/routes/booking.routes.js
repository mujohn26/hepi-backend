import express from 'express';
import BookingController from '../controllers/booking.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import BookingMiddleware from '../middlewares/booking,middleware';
const bookingRoute = express.Router();
bookingRoute.post('/request', BookingController.bookingRequest);
bookingRoute.patch('/accept-request/:requestId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingMiddleware.checkIfRequestIsAccepted,BookingController.acceptBookingRequest);
bookingRoute.patch('/finish-request/:requestId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingMiddleware.checkIfRequestIsFinished,BookingController.finishBookingRequest);
bookingRoute.get('/:requestId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingController.getRequestById);
bookingRoute.get('/status', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,BookingController.getRequestByStatus);


export default bookingRoute;