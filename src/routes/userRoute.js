import express from 'express';
import * as adminController from '../controllers/adminController';
import * as clientController from '../controllers/clientController';

const userRoute = express.Router();
userRoute.post('/admin/signup', adminController.createAdmin);
userRoute.post('/client/signup', clientController.createClient);
// userRoute.post('/signin',);



export default userRoute;