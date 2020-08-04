import express from 'express';
import * as adminController from '../controllers/adminController';

const adminRoute = express.Router();
adminRoute.post('/auth/signup', adminController.createAdmin);



export default adminRoute;