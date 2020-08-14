import { emit } from "nodemon";
import db from "../database/models";
class StaffServices {
  static getServicesByName(serviceName) {
    try {
      const services = db.services.findAll({
        where: {
         serviceName
        },
        include: [{
            model: db.doctor,
          }],
      });
      if (!services) return null;
      return services; 
    } catch (error) {
      return null;
    }
  }

}

export default StaffServices;
