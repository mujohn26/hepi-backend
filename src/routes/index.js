import express from 'express';
import adminRoute from './adminRoute';
import clientRoute from './clientRoute';
import doctorRoute from './doctor.route';
import authRoute from './auth.route';
import staffRoute from './staffRoute';
import bookingRoute from './booking.route';
import requestRoute from './request.route';
import agentRoute from './agentRoute';



const Router = express.Router();
Router.use('/admin', adminRoute);
Router.use('/client', clientRoute);
Router.use('/staff', doctorRoute);
Router.use('/staffs', staffRoute);
Router.use('/agent', agentRoute);
Router.use('/auth', authRoute);
Router.use('/booking', bookingRoute);
Router.use('/requests', requestRoute);



export default Router;
