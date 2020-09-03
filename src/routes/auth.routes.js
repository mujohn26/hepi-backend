import express from 'express';
import * as doctorController from '../controllers/doctorController';
import AuthController from '../controllers/auth.controller';

const authRoute = express.Router();
authRoute.post('/signin', AuthController.signin);

export default authRoute;