/* eslint-disable require-jsdoc */
import db from '../database/models';
const {admin} = db;
class UserServices {
  static async findAdminByEmail(email) {
    try {
      const user = await admin.findOne({ where: { email } });
      if (!user) return null;
      return user;
    } catch (error) {
      return undefined;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await db.user.findOne({ where: { email } });
      if (!user) return null;
      return user;
    } catch (error) {
      return undefined;
    }
  }

  static async activateAdmin(id) {
    try {
      return await db.admin.update({ status: 'active' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async deactivateAdmin(id) {
    try {
      return await db.admin.update({ status: 'deactive' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async getAdmins() {
    try {
      const admins = await db.admin.findAll();
      return admins;
    } catch (error) {
      return null;
    }
  }

  static getAdminByStatus(status) {
    try {
      const staff = db.admin.findAll({
        where: {
          status
        },
      });
      if (!staff) return null;
      return staff;
    } catch (error) {
      return null;
    }
  }
}
export default UserServices;
