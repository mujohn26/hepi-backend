/* eslint-disable require-jsdoc */
import response from '../helpers/response';
import UserServices from '../services/user.services';

/**
 *
 * @param {Object} req req
 * @param {Object} res res
 * @param {Object} next ment
 * @returns {Object} hghfgjh
 */
class VerifyAdminMiddleware {
  static async verifySuperAdmin(req, res, next) {
    const user = await UserServices.findAdminByEmail(req.user.email);
    const role = user.role.toLowerCase();
    if (role !== 'superadmin') {
      return response.errorMessage(
        res,
        'You can not perform this Action',
        401,
        'error'
      );
    }
    return next();
  }

  static async verifyAdmin(req, res, next) {
    const user = await UserServices.findAdminByEmail(req.user.email);
    const role = user.role.toLowerCase();
    if (role !== 'superadmin' && role !== 'admin') {
      return response.errorMessage(
        res,
        'You can not perform this Action',
        401,
        'error'
      );
    }
    return next(); 
  }
}
export default VerifyAdminMiddleware;
