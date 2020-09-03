'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    tel: Sequelize.STRING,
    province: Sequelize.STRING,
    district: Sequelize.STRING,
    sector: Sequelize.STRING,
    service: Sequelize.STRING,
    proposedDoctorId: Sequelize.INTEGER,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    status: Sequelize.STRING,
    paymentMethod: Sequelize.STRING,
    duration: Sequelize.STRING,
    hours: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    days: Sequelize.INTEGER,
    agentCode: Sequelize.STRING

  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
    bookings.belongsTo(
      models.doctor,
      { foreignKey: 'proposedDoctorId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
  };
  return bookings;
};