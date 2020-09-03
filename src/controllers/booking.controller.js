/* eslint-disable require-jsdoc */
import mailer from '../helpers/send.email.helper';
import BookingServices from '../services/booking.services';
import response from '../helpers/response';
import PricingServices from '../services/pricing.service';

class BookingController {
  static async bookingRequest(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        tel,
        province,
        district,
        sector,
        service,
        proposedDoctor,
        startDate,
        endDate,
        duration,
        hours,
        days,
        agentCode
      } = req.body;
      const serviceName = service;
      const pricing = await PricingServices.getServicePriceByServiceName(serviceName);
      const price = (hours * pricing.dataValues.price) * days;
      const data = {
        firstName,
        lastName,
        email,
        tel,
        province,
        district,
        sector,
        service,
        proposedDoctor,
        status: 'not-started',
        startDate,
        endDate,
        duration,
        hours,
        days,
        price,
        agentCode
      };
      const booking = await BookingServices.makeRequest(data);
      const emailView = mailer.bookingRequestEmail(email, firstName, price);
      mailer.sendEmail(email, 'Welcome email', emailView);

      return response.successMessage(
        res,
        'Booking request was made successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async acceptBookingRequest(req, res) {
    try {
      const id = req.params.requestId;
      const updated = await BookingServices.acceptBookingRequest(id);
      return response.successMessage(
        res,
        'Request was approved successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async finishBookingRequest(req, res) {
    try {
      const id = req.params.requestId;
      const updated = await BookingServices.finishBookingRequest(id);
      const requestData = await BookingServices.findBookingRequestById(id);
      const { agentCode } = requestData.dataValues;
      if (agentCode !== null) {
        const amount = (requestData.dataValues.price * 3) / 100;
        const data = {
          bookingRequestId: id,
          agentCode,
          amount,
          status:"unconfirmed",
          state:"admin"
        };
        await BookingServices.createAgentCash(data);
        return response.successMessage(
          res,
          'Request was finished successfully',
          200
        );
      }
      return response.successMessage(
        res,
        'Request was finished successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getRequestById(req, res) {
    try {
      const id = req.params.requestId;
      const requests = await BookingServices.getRequestById(id);
      return response.successMessage(
        res,
        'Request was retrieved successfully',
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getRequestByStatus(req, res) {
    try {
      const { status } = req.params;
      const requests = await BookingServices.getRequestByStatus(status);
      return response.successMessage(
        res,
        'Request was retrieved successfully',
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getRequestByService(req, res) {
    try {
      const service = req.params.serviceName;
      const requests = await BookingServices.getRequestByService(service);
      return response.successMessage(
        res,
        'Request was retrieved successfully',
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getAllRequests(req, res) {
    try {
      const requests = await BookingServices.getAllRequests();
      return response.successMessage(
        res,
        'All requests was retrieved successfully',
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }
}

export default BookingController;
