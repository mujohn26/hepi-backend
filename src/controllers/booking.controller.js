import mailer from "../helpers/send.email.helper";
import BookingServices from "../services/booking.services";
import response from "../helpers/response";
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
      } = req.body;

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
        status: "not-started",
        startDate,
        endDate,
      };
      const booking = await BookingServices.makeRequest(data);
      const emailView = mailer.bookingRequestEmail(email, firstName);
      mailer.sendEmail(email, "Welcome email", emailView);

      return response.successMessage(
        res,
        "Booking request was made successfully",
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
        "Request was approved successfully",
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };

  static async finishBookingRequest(req, res) {
    try {
      const id = req.params.requestId;
      const updated = await BookingServices.finishBookingRequest(id);
      return response.successMessage(
        res,
        "Request was terminated successfully",
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };

  static async getRequestById(req, res) {
    try {
      const id = req.params.requestId;
      const requests = await BookingServices.getRequestById(id);
      return response.successMessage(
        res,
        "Request was retrieved successfully",
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };
  static async getRequestByStatus(req, res) {
    try {
    const {status} = req.params;
      const requests = await BookingServices.getRequestByStatus(status);
      return response.successMessage(
        res,
        "Request was retrieved successfully",
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };

  static async getRequestByService(req, res) {
    try {
    const service = req.params.serviceName;
      const requests = await BookingServices.getRequestByService(service);
      return response.successMessage(
        res,
        "Request was retrieved successfully",
        200,
        requests
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };

  static async getAllRequests(req,res){
    try {
        const requests = await BookingServices.getAllRequests();
        return response.successMessage(
          res,
          "All requests was retrieved successfully",
          200,
          requests
        );
      } catch (error) {
        return response.errorMessage(res, error.message, 500);
      }
  }
}

export default BookingController;
