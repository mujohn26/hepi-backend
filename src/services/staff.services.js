import { emit } from "nodemon";
import db from "../database/models";
class StaffServices {
  static async activateStaff(id) {
    try {
      return await db.doctor.update({ status: "active" }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async deactivateStaff(id) {
    try {
      return await db.doctor.update({ status: "inactive" }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static getStaffById(id) {
    try {
      const staff = db.doctor.findOne({
        where: {
         id
        },
      });
      if (!staff) return null;
      return staff; 
    } catch (error) {
      return null;
    }
  }

  static async getAllStaffs() {
    try {
      return await db.doctor.findAll();
    } catch (error) {
      return null;
    }
  }
}

export default StaffServices;
