import response from '../helpers/response';
import BookingServices from '../services/booking.services';
class BookingMiddleware{
    static async checkIfRequestIsAccepted(req, res, next) {
        const id = req.params.requestId;
        const request = await BookingServices.getRequestById(id);
        const status = request.dataValues.status;
        if (status === "in-progress") {
          const status = 401;
          return response.errorMessage(res, "That request is already in progress", status);
        }
        return next();
      }

      static async checkIfRequestIsFinished(req, res, next) {
        const id = req.params.requestId;
        const request = await BookingServices.getRequestById(id);
        const status = request.dataValues.status;
        if (status === "finished") {
          const status = 401;
          return response.errorMessage(res, "That request has already terminated", status);
        }
        return next();
      }
    

}

export default BookingMiddleware;