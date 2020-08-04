import express from 'express';
import adminRoute from './adminRoute';
import clientRoute from './clientRoute';
import doctorRoute from './doctorRoute';


const Router = express.Router();
Router.use('/admin', adminRoute);
Router.use('/client', clientRoute);
Router.use('/doctor', doctorRoute);

export default Router;
