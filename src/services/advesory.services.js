/* eslint-disable require-jsdoc */

import db from '../database/models';

class AdversoryServices {
  static makeRequest(data) {
    try {
      const adversoryRequest = db.advesoryCenter.create(data);
      if (!adversoryRequest) return null;
      return adversoryRequest;
    } catch (error) {
      return null;
    }
  }

  static async getAdversories() {
    try {
      const adversories = await db.advesoryCenter.findAll();
      return adversories;
    } catch (error) {
      return null;
    }
  }
}
export default AdversoryServices;
