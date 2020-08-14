import express from 'express';
import adminRoute from './adminRoute';
import clientRoute from './clientRoute';
import doctorRoute from './doctor.route';
import authRoute from './auth.route';


const Router = express.Router();
Router.use('/admin', adminRoute);
Router.use('/client', clientRoute);
Router.use('/staff', doctorRoute);
Router.use('/auth', authRoute);


export default Router;
