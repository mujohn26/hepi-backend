/* eslint-disable require-jsdoc */
import response from '../helpers/response';
import mailer from '../helpers/send.email.helper';
import HomeProgramService from '../services/home.program.services';

class HomeProgramController {
  static async homeProgramRegister(req, res) {
    try {
      const {
        chefFamilyNames,
        age,
        district,
        sector,
        cell,
        tel,
        email,
        patientGenre,
        patientAge,
        patientStatus,
        visitDaysPerweek,

      } = req.body;
      const price = visitDaysPerweek * 10000;
      const status = 'pending';
      const data = {
        chefFamilyNames,
        age,
        district,
        sector,
        cell,
        tel,
        email,
        patientGenre,
        patientAge,
        patientStatus,
        visitDaysPerweek,
        price,
        status
      };
      await HomeProgramService.homeProgramRequest(data);

      const emailView = mailer.subscribingVisit(email, chefFamilyNames, price);
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
      const updated = await HomeProgramService.approveSubscription(id);
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
      const updated = await HomeProgramService.rejectSubscription(id);
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
      const updated = await HomeProgramService.terminateSubscription(id);
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
      const subscriptions = await HomeProgramService.getSubscriptions();
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

export default HomeProgramController;
