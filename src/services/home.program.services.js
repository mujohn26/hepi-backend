/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
import db from '../database/models';

class HomeProgramService {
  static homeProgramRequest(data) {
    try {
      const subscribe = db.homeProgram.create(data);
      if (!subscribe) return null;
      return subscribe;
    } catch (error) {
      return null;
    }
  }

  static async approveSubscription(id) {
    try {
      return await db.homeProgram.update({ status: 'approved' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async rejectSubscription(id) {
    try {
      return await db.homeProgram.update({ status: 'rejected' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async terminateSubscription(id) {
    try {
      return await db.homeProgram.update({ status: 'terminated' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async getSubscriptions() {
    try {
      const subscriptions = await db.homeProgram.findAll();
      return subscriptions;
    } catch (error) {
      return null;
    }
  }

  static async getSubscriptionById(id) {
    try {
      const subscriptions = await db.homeProgram.findOne({ where: { id } });
      return subscriptions;
    } catch (error) {
      return null;
    }
  }
}

export default HomeProgramService;
