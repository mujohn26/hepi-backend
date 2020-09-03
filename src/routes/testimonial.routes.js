import express from 'express';
import TestimonialController from '../controllers/testimonial.controller';

const testmonialRoute = express.Router();
testmonialRoute.post('/', TestimonialController.addTestimonial);
testmonialRoute.patch('/display/:id', TestimonialController.changeDisplay);
testmonialRoute.get('/web', TestimonialController.getWebTestimonial);
testmonialRoute.get('/display', TestimonialController.getAllTestimonial);



export default testmonialRoute;