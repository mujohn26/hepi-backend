/* eslint-disable require-jsdoc */
import mailer from '../helpers/send.email.helper';
import AdversoryServices from '../services/advesory.services';
import response from '../helpers/response';

class AdversoryContoller {
  static async makeAdversoryRequest(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        tel,
        province,
        district,
        sector,
        adversoryMean,
        date,
        visit
      } = req.body;
      const price = visit * 5000;
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
        adversoryMean,
        price
      };
      const type= 'adversory';
      const adversory = await AdversoryServices.makeRequest(data);
      const emailView = mailer.adversoryAndCounselingRequestEmail(email, firstName, price, type);
      mailer.sendEmail(email, 'HEPI', emailView);

      return response.successMessage(
        res,
        'Adversory request was made successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }


  static async getAdversories(req, res) {
    try {
      const adversories = await AdversoryServices.getAdversories();
      const adversoringData = [];
      adversories.map((adversoring, index) => {
        adversoringData.push(adversoring.dataValues);
      });
      return response.successMessage(
        res,
        'Adversories data was retrieved successfully',
        200,
        adversoringData
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }
  //   static async acceptBookingRequest(req, res) {
  //     try {
  //       const id = req.params.requestId;
  //       const updated = await BookingServices.acceptBookingRequest(id);
  //       return response.successMessage(
  //         res,
  //         'Request was approved successfully',
  //         200
  //       );
  //     } catch (error) {
  //       return response.errorMessage(res, error.message, 500);
  //     }
  //   }

  //   static async finishBookingRequest(req, res) {
  //     try {
  //       const id = req.params.requestId;
  //       const updated = await BookingServices.finishBookingRequest(id);
  //       const requestData = await BookingServices.findBookingRequestById(id);
  //       const { agentCode } = requestData.dataValues;
  //       if (agentCode !== null) {
  //         const amount = (requestData.dataValues.price * 3) / 100;
  //         const data = {
  //           bookingRequestId: id,
  //           agentCode,
  //           amount
  //         };
  //         await BookingServices.createAgentCash(data);
  //         return response.successMessage(
  //           res,
  //           'Request was finished successfully',
  //           200
  //         );
  //       }
  //       return response.successMessage(
  //         res,
  //         'Request was finished successfully',
  //         200
  //       );
  //     } catch (error) {
  //       return response.errorMessage(res, error.message, 500);
  //     }
  //   }

  //   static async getRequestById(req, res) {
  //     try {
  //       const id = req.params.requestId;
  //       const requests = await BookingServices.getRequestById(id);
  //       return response.successMessage(
  //         res,
  //         'Request was retrieved successfully',
  //         200,
  //         requests
  //       );
  //     } catch (error) {
  //       return response.errorMessage(res, error.message, 500);
  //     }
  //   }

  //   static async getRequestByStatus(req, res) {
  //     try {
  //       const { status } = req.params;
  //       const requests = await BookingServices.getRequestByStatus(status);
  //       return response.successMessage(
  //         res,
  //         'Request was retrieved successfully',
  //         200,
  //         requests
  //       );
  //     } catch (error) {
  //       return response.errorMessage(res, error.message, 500);
  //     }
  //   }

  //   static async getRequestByService(req, res) {
  //     try {
  //       const service = req.params.serviceName;
  //       const requests = await BookingServices.getRequestByService(service);
  //       return response.successMessage(
  //         res,
  //         'Request was retrieved successfully',
  //         200,
  //         requests
  //       );
  //     } catch (error) {
  //       return response.errorMessage(res, error.message, 500);
  //     }
  //   }

//   static async getAllRequests(req, res) {
//     try {
//       const requests = await BookingServices.getAllRequests();
//       return response.successMessage(
//         res,
//         'All requests was retrieved successfully',
//         200,
//         requests
//       );
//     } catch (error) {
//       return response.errorMessage(res, error.message, 500);
//     }
//   }
}

export default AdversoryContoller;
