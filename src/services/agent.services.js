/* eslint-disable require-jsdoc */

import { emit } from "nodemon";
import db from "../database/models";

const { Op } = require("sequelize");

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
          id,
        },
      });
      if (!staff) return null;
      return staff;
    } catch (error) {
      return null;
    }
  }

  static async getAndCountAllAgents() {
    try {
      const agents = await db.agent.findAndCountAll();
      return agents;
    } catch (error) {
      return error;
    }
  }

  static async getAllAgents() {
    try {
      return await db.agent.findAll();
    } catch (error) {
      return null;
    }
  }

  static async findAgentByEmail(email) {
    try {
      const user = await db.agent.findOne({ where: { email } });
      if (!user) return null;
      return user;
    } catch (error) {
      
      return undefined;
    }
  }

  static async getAgentsCash(agentCode) {
    try {
      return await db.agentCash.findAll({
        where: {
          agentCode,
        },
        order: [
          ["isPaid", "ASC"],
        ],
      });
    } catch (error) { 
      return null;
    }
  }

  static async getAllAgentsCash() {
    try {
      return await db.agentCash.findAll({
        order: [
          ["isPaid", "DESC"],
        ],
      });
    } catch (error) { 
      return null;
    }
  }

  static async getAllAgentCashesByStatus(status){
    try {
      return await db.agentCash.findAll( { where: { status } }); 
    } catch (error) {
      return error;

    }
  }
  static async adminChangeBalanceStatus(id,status) {
    try {

      if(status==="rejected"){

        return await db.agentCash.update({ status: `${status}`, state:"admin" }, { where: { id } });
      } 
      else{

        return await db.agentCash.update({ status: `${status}`, state:"agent" }, { where: { id } });

      }
    } catch (error) {

      return null;
    }
  }
  static async agentAcceptBalanceStatus(id){
    try {
      return await db.agentCash.update({ status: "finished", isPaid:true,state:"none" }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

}

export default agentServices;
