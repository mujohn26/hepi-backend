import express from 'express';
import adminRoute from './admin.routes';
import clientRoute from './client.routes';
import doctorRoute from './doctor.routes';
import authRoute from './auth.routes';
import staffRoute from './staff.routes';
import bookingRoute from './booking.routes';
import requestRoute from './request.routes';
import pricingRoute from './pricing.routes';
import homeProgramRoute from './home.program.routes';
import agentRoute from './agent.routes';
import adversoryRoute from './adversory.routes';
import counselingRoute from './counseling.routes';
import mperekezaRoute from './mperekeza.routes';
import testimonialRoute from './testimonial.routes';
import staffWeb from './staffWeb.routes';
import agentBalance from './agent.balance.routes';

const Router = express.Router();
Router.use('/admin', adminRoute);
Router.use('/client', clientRoute);
Router.use('/staff', doctorRoute);
Router.use('/staffs', staffRoute);
Router.use('/staff-web',staffWeb)
Router.use('/auth', authRoute);
Router.use('/booking', bookingRoute);
Router.use('/requests', requestRoute);
Router.use('/pricing', pricingRoute);
Router.use('/subscription', homeProgramRoute);
Router.use('/agent', agentRoute);
Router.use('/adversory', adversoryRoute);
Router.use('/counseling', counselingRoute);
Router.use('/mperekeza', mperekezaRoute);
Router.use('/testimonial',testimonialRoute);
Router.use('/balance', agentBalance);


export default Router;
