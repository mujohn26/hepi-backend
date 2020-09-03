import express from 'express';
import PricingController from '../controllers/pricing.controller';
import VerifyAdminMiddleware from '../middlewares/verify.admin';
import verifyToken from '../middlewares/verify.token';

const pricingRoute = express.Router();
pricingRoute.post('/', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,PricingController.addServicePrices);
pricingRoute.patch('/:pricingServiceId', verifyToken.headerToken, VerifyAdminMiddleware.verifyAdmin,PricingController.updateServicePrice);
pricingRoute.get('/', PricingController.getServicePrice);


export default pricingRoute;
