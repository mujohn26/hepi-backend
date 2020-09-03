/* eslint-disable require-jsdoc */
import mailer from '../helpers/send.email.helper';
import CounselingServices from '../services/counseling.services';
import response from '../helpers/response';

class AdversoryContoller {
  static async makeCounselingRequest(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        tel,
        province,
        district,
        sector,
        counselingMean,
        date,
        visit
      } = req.body;
      const price = visit * 10000;
      const data = {
        firstName,
        lastName,
        email,
        tel,
        province,
        district,
        sector,
        status: 'pending',
        visit,
        date,
        price,
        counselingMean
      };
      const type = 'counseling';
      const adversory = await CounselingServices.makeRequest(data);
      const emailView = mailer.adversoryAndCounselingRequestEmail(email, firstName, price, type);
      mailer.sendEmail(email, 'HEPI', emailView);

      return response.successMessage(
        res,
        'Counseling request was made successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getCounselings(req, res) {
    try {
      const counselings = await CounselingServices.getCounselings();
      const counselingData = [];
      counselings.map((counseling, index) => {
        counselingData.push(counseling.dataValues);
      });
      return response.successMessage(
        res,
        'Counselings data was retrieved successfully',
        200,
        counselingData
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }
}

export default AdversoryContoller;
