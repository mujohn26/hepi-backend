/* eslint-disable require-jsdoc */
import jwt from 'jsonwebtoken';
import response from './response';
import UserServices from '../services/user.services';

class verifyTokens {
  static async verifyAllTokens(req, res, next, token) {
    if (!token) {
      return response.errorMessage(
        res,
        'No token provided, Access Denied!',
        401,
      );
    }
    try {
      const decodedToken = jwt.verify(token, process.env.SECRETEKEY);
      const user = await UserServices.findAdminByEmail(
        decodedToken.payload.email,
      );
      decodedToken.token = token;
      if (user === undefined) {
        return response.errorMessage(
          res,
          'You provided the invalid token!',
          401,
        );
      }

      if (user.token !== token && user.token === null) {
        return response.successMessage(res, 'You need to signin first!', 401);
      }
      req.user = user;

      return next();
    } catch (error) {
      return response.errorMessage(res, 'You provided the invalid token!', 401);
    }
  }
}
export default verifyTokens;
