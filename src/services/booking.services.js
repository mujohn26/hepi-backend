/* eslint-disable require-jsdoc */

import { emit } from 'nodemon';
import db from '../database/models';

class BookingServices {
  static makeRequest(data) {
    try {
      const booking = db.bookings.create(data);
      if (!booking) return null;
      return booking;
    } catch (error) {
      return null;
    }
  }

  static getRequestById(id) {
    try {
      const staff = db.bookings.findOne({
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

  static async acceptBookingRequest(id) {
    try {
      return await db.bookings.update({ status: 'in-progress' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static async finishBookingRequest(id) {
    try {
      return await db.bookings.update({ status: 'finished' }, { where: { id } });
    } catch (error) {
      return null;
    }
  }

  static getRequestByStatus(status) {
    try {
      const staff = db.bookings.findAll({
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

  static getRequestByService(service) {
    try {
      const staff = db.bookings.findOne({
        where: {
          service
        },
      });
      if (!staff) return null;
      return staff;
    } catch (error) {
      return null;
    }
  }

  static getAllRequests() {
    try {
      const requests = db.bookings.findAll();
      if (!requests) return null;
      return requests;
    } catch (error) {
      return null;
    }
  }

  static findBookingRequestById(id) {
    try {
      const staff = db.bookings.findOne({
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

  static createAgentCash(data) {
    try {
      const agentCash = db.agentCash.create(data);
      if (!agentCash) return null;
      return agentCash;
    } catch (error) {
      return null;
    }
  }
}
export default BookingServices;
