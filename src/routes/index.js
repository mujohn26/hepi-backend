import express from 'express';
import userRoute from './adminRoute';

const Router = express.Router();
 Router.use('/auth',userRoute);

export default Router;
