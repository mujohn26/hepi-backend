import express from 'express';
import * as doctorController from '../controllers/doctorController';
import {getStaffByService, getDoctorByStatus} from '../controllers/doctorController';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';

const doctorRoute = express.Router();
doctorRoute.get('/by-services',getStaffByService);
doctorRoute.get('/:status', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin, getDoctorByStatus);



export default doctorRoute;