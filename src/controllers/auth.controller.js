/* eslint-disable require-jsdoc */
import checkEmailpassword from '../middlewares/auth';
import response from '../helpers/response';
import UserServices from '../services/user.services';

class AuthController {
  static async signin(req, res) {
    await checkEmailpassword(req, res);
  }

  static async activateAdmin(req, res) {
    try {
      const id = req.params.userId;
      const updated = await UserServices.activateAdmin(id);
      return response.successMessage(
        res,
        'Account was activated successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async deactivateAdmin(req, res) {
    try {
      const id = req.params.userId;
      const updated = await UserServices.deactivateAdmin(id);
      return response.successMessage(
        res,
        'Account was deactivated successfully',
        200
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getAdmins(req, res) {
    try {
      const admins = await UserServices.getAdmins();
      const adminData = [];
      admins.map((admin, index) => {
        adminData.push(admin.dataValues);
      });
      return response.successMessage(
        res,
        'Admins data was retrieved successfully',
        200,
        adminData
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  }

  static async getAdminByStatus(req, res) {
    try {
      const { status } = req.params;
      const admins = await UserServices.getAdminByStatus(status);
      return response.successMessage(
        res,
        'Admins were retrieved successfully',
        200,
        admins
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };
}

export default AuthController;
