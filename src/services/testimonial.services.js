/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
import db from "../database/models";

class TestimonialService {
  static async addTestimonial(data) {
    try {
      const testimonial = await db.testimonial.create(data);
      if (!testimonial) return null;
      return testimonial;
    } catch (error) {
      return null;
    }
  }

  static async changeDisplay(id, displayType) {
    try {
      const isUpdated = await db.testimonial.update(
        { display: displayType },
        { where: { id } }
        );
        return ;
    } catch (error) {
      return null;
    }
  }

  static async getWebTestimonial() {
    try {
      return await db.testimonial.findAll({
        where: { display: true},
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      return null;
    }
  } 

  static async getAllTestimonial() {
    try {
      return await db.testimonial.findAll({ order: [["createdAt", "DESC"]] });
    } catch (error) {
      return null;
    }
  }
}

export default TestimonialService;
