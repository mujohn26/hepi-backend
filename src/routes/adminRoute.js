import express from 'express';
import * as userController from '../controllers/adminController';

const userRoute = express.Router();
userRoute.post('/signup',userController.createAdmin);
// userRoute.post('/signin',);



export default userRoute;