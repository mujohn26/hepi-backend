/* eslint-disable require-jsdoc */

import db from '../database/models';

class CounselingServices {
  static makeRequest(data) {
    try {
      const counselingRequest = db.counseling.create(data);
      if (!counselingRequest) return null;
      return counselingRequest;
    } catch (error) {
      return null;
    }
  }

  static async getCounselings() {
    try {
      const counselings = await db.counseling.findAll();
      return counselings;
    } catch (error) {
      return null;
    }
  }
}
export default CounselingServices;
