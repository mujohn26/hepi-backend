import express from 'express';
import * as doctorController from '../controllers/doctorController';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';
import StaffMiddleware from '../middlewares/staff.middleware';
import {
  activateStaff,
  deactivateStaff,
  getAllStaffs,
  getAllStaffById,
  getStaffByService,
  getAllStaffsWeb
} from '../controllers/doctorController';

const doctorRoute = express.Router();
doctorRoute.post('/auth/signup', doctorController.createDoctor);
doctorRoute.patch(
  '/activate-account/:staffId',
  verifyToken.headerToken,
  VerifyAdminMiddleware.verifySuperAdmin,
  StaffMiddleware.checkIfDoctorIsActive,
  activateStaff
);
doctorRoute.patch(
  '/deactivate-account/:staffId',
  verifyToken.headerToken,
  VerifyAdminMiddleware.verifySuperAdmin,
  StaffMiddleware.checkIfDoctorIsInactive,
  deactivateStaff
);
doctorRoute.get(
  '/',
  verifyToken.headerToken,
  VerifyAdminMiddleware.verifyAdmin,
  getAllStaffs
);
doctorRoute.get(
  '/:staffId',
  verifyToken.headerToken,
  VerifyAdminMiddleware.verifyAdmin,
  getAllStaffById
);
doctorRoute.get(
  '/web',
  getAllStaffsWeb
);
doctorRoute.get('/by-services', getStaffByService);

export default doctorRoute;
