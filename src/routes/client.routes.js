import express from 'express';
import * as clientController from '../controllers/clientController';

const clientRoute = express.Router();
clientRoute.post('/contactus', clientController.contactus);
clientRoute.post('/auth/register', clientController.createClient);



export default clientRoute;