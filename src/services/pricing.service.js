/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
import db from '../database/models';

class PricingService {
  static addServicePrice(data) {
    try {
      const pricing = db.servicePricing.create(data);
      if (!pricing) return null;
      return pricing;
    } catch (error) {
      return null;
    }
  }

  static async updateServicePrice(price, id) {
    try {
      return await db.servicePricing.update({ price }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async getServicePrice() {
    try {
      const servicePrice = await db.servicePricing.findAll();
      return servicePrice;
    } catch (error) {
      return null;
    }
  }

  static async getServicePriceByServiceName(serviceName) {
    try {
      const servicePrice = await db.servicePricing.findOne({ where: { serviceName } });
      return servicePrice;
    } catch (error) {
      return null;
    }
  }
}

export default PricingService;
