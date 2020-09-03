import express from 'express';
import * as adminController from '../controllers/adminController';
import AuthController from '../controllers/auth.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';

const adminRoute = express.Router();
adminRoute.post('/auth/signup', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, adminController.createAdmin);
adminRoute.patch('/activate/:userId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,AuthController.activateAdmin);
adminRoute.patch('/deactivate/:userId', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,AuthController.deactivateAdmin);
adminRoute.get('/:status', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin,AuthController.getAdminByStatus);
adminRoute.get('/', verifyToken.headerToken, VerifyAdminMiddleware.verifySuperAdmin, AuthController.getAdmins);


export default adminRoute;