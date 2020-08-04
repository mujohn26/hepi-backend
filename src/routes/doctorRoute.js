import express from 'express';
import * as doctorController from '../controllers/doctorController';

const doctorRoute = express.Router();
doctorRoute.post('/auth/signup', doctorController.createDoctor);



export default doctorRoute;