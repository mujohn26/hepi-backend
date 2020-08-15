import express from 'express';
import adminRoute from './adminRoute';
import clientRoute from './clientRoute';
import doctorRoute from './doctor.route';
import authRoute from './auth.route';
import agentRoute from './agentRoute';


const Router = express.Router();
Router.use('/admin', adminRoute);
Router.use('/client', clientRoute);
Router.use('/staff', doctorRoute);
Router.use('/agent', agentRoute);
Router.use('/auth', authRoute);


export default Router;
