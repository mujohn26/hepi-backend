/* eslint-disable require-jsdoc */
/* eslint-disable no-console */
import response from '../helpers/response';
import PricingService from '../services/pricing.service';

class PricingController {
  static async addServicePrices(req, res) {
    try {
      const { serviceName, price } = req.body;
      const data = {
        serviceName,
        price
      };
      await PricingService.addServicePrice(data);
      return response.successMessage(
        res,
        'Price and service was added successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async updateServicePrice(req, res) {
    try {
      const { price } = req.body;
      const id = req.params.pricingServiceId;
      await PricingService.updateServicePrice(price, id);
      return response.successMessage(
        res,
        'Price was updated successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getServicePrice(req, res) {
    try {
      const servicePrices = await PricingService.getServicePrice();
      const services = [];
      servicePrices.map((service, index) => {
        services.push({
          id: service.dataValues.id,
          serviceName: service.dataValues.serviceName,
          price: service.dataValues.price
        });
      });
      return response.successMessage(
        res,
        'Service prices was retrieved successfully',
        200,
        services
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }
}

export default PricingController;
