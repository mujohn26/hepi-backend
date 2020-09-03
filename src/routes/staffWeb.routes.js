import express from 'express';
import * as doctorController from '../controllers/doctorController';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import StaffMiddleware from '../middlewares/staff.middleware';
import {

  getAllStaffsWeb
} from '../controllers/doctorController';

const doctorRoute = express.Router();
doctorRoute.get(
  '/',
  getAllStaffsWeb
);

export default doctorRoute;
