import { emit } from "nodemon";
import db from "../database/models";
class agentServices {
  static async activateAgent(id) {
    try {
      return await db.agent.update({ status: "active" }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async deactivateAgent(id) {
    try {
      return await db.agent.update({ status: "inactive" }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static getAgentById(id) {
    try {
      const staff = db.agent.findOne({
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

  static async getAllAgents() {
    try {
      return await db.agent.findAll();
    } catch (error) {
      return null;
    }
  }
}

export default agentServices;
