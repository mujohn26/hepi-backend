/* eslint-disable require-jsdoc */
import response from '../helpers/response';
import mailer from '../helpers/send.email.helper';
import MperekezaService from '../services/mperekeza.services';

class MperekezaController {
  static async mperekezaRegister(req, res) {
    try {
      const {
        firstName,
        lastName,
        province,
        district,
        sector,
        cell,
        tel,
        email,
        startDate,
        service,
        visits

      } = req.body;
      const price = visits * 12500;
      const status = 'pending';
      const data = {
        firstName,
        lastName,
        province,
        district,
        sector,
        cell,
        tel,
        email,
        startDate,
        service,
        visits,
        price,
        status
      };
     const created=  await MperekezaService.mperekezaRequest(data);

     if(created === null){
        return response.errorMessage(res, "Request was not created", 400);
 
     }
      const emailView = mailer.mperekezaService(email, lastName, price);
      mailer.sendEmail(email, 'Welcome email', emailView);
      return response.successMessage(
        res,
        'home program request was made successfully',
        200,
        status
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async approveSubscription(req, res) {
    try {
      const id = req.params.subscriptionId;
      const updated = await MperekezaService.approveSubscription(id);
      return response.successMessage(
        res,
        'Request was approved successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async rejectSubscription(req, res) {
    try {
      const id = req.params.subscriptionId;
      const updated = await MperekezaService.rejectSubscription(id);
      return response.successMessage(
        res,
        'Request was rejected successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async terminateSubscription(req, res) {
    try {
      const id = req.params.subscriptionId;
      const updated = await MperekezaService.terminateSubscription(id);
      return response.successMessage(
        res,
        'Request was terminated successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getSubscriptions(req, res) {
    try {
      const subscriptions = await MperekezaService.getSubscriptions();
      const subscriprionData = [];
      subscriptions.map((subscription, index) => {
        subscriprionData.push(subscription.dataValues);
      });
      return response.successMessage(
        res,
        'Subscription data was retrieved successfully',
        200,
        subscriprionData
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getSubscriptionById(req, res) {
    try {
      const id = req.params.subscriptionId;

      const subscription = await HomeProgramService.getSubscriptionById(id);
      return response.successMessage(
        res,
        'Subscription data was retrieved successfully',
        200,
        subscription.dataValues
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }
}

export default MperekezaController;
