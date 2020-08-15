import staffServices from "../services/staff.services";
import response from "../helpers/response";

class StaffMiddleware {
  static async checkIfDoctorIsActive(req, res, next) {
    const id = req.params.staffId;
    const staff = await staffServices.getStaffById(id);
    const status = staff.dataValues.status;
    if (status === "active") {
      const status = 401;
      return response.errorMessage(res, "That user is already active", status);
    }
    return next();
  }

  static async checkIfDoctorIsInactive(req, res, next) {
    const id = req.params.staffId;
    const staff = await staffServices.getStaffById(id);
    const status = staff.dataValues.status;
    if (status === "inactive") {
      const status = 401;
      return response.errorMessage(res, "That user is already inactive", status);
    }
    return next();
  }
}

export default StaffMiddleware;
