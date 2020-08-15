import express from 'express';
import * as doctorController from '../controllers/doctorController';
import {getStaffByService} from '../controllers/doctorController';

const doctorRoute = express.Router();
doctorRoute.get('/by-services',getStaffByService);


export default doctorRoute;