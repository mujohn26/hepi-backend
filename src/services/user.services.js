import { emit } from 'nodemon';
import db from '../database/models';

class UserServices {
  static async findAdminByEmail(email) {
    try {
      const user = await db.admin.findOne({ where: { email } });

      if (!user) return null;
      return user;
    } catch (error) {
      return undefined;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await db.user.findOne({ where: { email } });
      http://localhost:3000/api/staff/activate-account/1
      if (!user) return null;
      return user;
    } catch (error) {
      return undefined;
    }
  }
}
export default UserServices;
