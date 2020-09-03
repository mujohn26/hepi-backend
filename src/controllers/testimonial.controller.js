/* eslint-disable require-jsdoc */
import mailer from "../helpers/send.email.helper";
import TestimonialServices from "../services/testimonial.services";
import response from "../helpers/response";

class TestimonialController {
  static async addTestimonial(req, res) {
    try {
      const { name, email, message } = req.body;

      const data = {
        name,
        email,
        message,
        display: false,
      };
      const testimonial = await TestimonialServices.addTestimonial(data);
      const emailView = mailer.testimonial(name);
      mailer.sendEmail(email, "Thank you", emailView);

      return response.successMessage(
        res,
        "Testimonial was added successfully",
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async changeDisplay(req, res){
    try {
      const {id} =  req.params;
      const {displayType} =  req.body;
      const testimonial = await TestimonialServices.changeDisplay(id,displayType);
      return response.successMessage(
        res,
        "Testimonial display was changed successfully",
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500); 
    }
  }

  static async getWebTestimonial(req, res){
    try {
      const testimonials = await TestimonialServices.getWebTestimonial();
      const testimonialData= [];
      for(let test of testimonials){
        testimonialData.push(test.dataValues);
}


      return response.successMessage(
        res,
        "Testimonial display was changed successfully",
        200,
        testimonialData,
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500); 
    }
  }

  static async getAllTestimonial(req, res){
    try {
      const testimonials = await TestimonialServices.getAllTestimonial();
      const testimonialData= [];
      for(let test of testimonials){
        testimonialData.push(test.dataValues);
      }
      return response.successMessage(
        res,
        "Testimonial was changed successfully",
        200,
        testimonialData,
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500); 
    }
  }
}

export default TestimonialController;
