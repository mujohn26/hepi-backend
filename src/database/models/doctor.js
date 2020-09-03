'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const doctor = sequelize.define('doctor', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: Sequelize.STRING,
    tel: { type: Sequelize.STRING, allowNull: false, unique: true },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Doctor' },
    status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'pending' },
    nationality: Sequelize.STRING,
    educationLevel: Sequelize.STRING,
    licence: Sequelize.STRING,
    locProvince: Sequelize.STRING,
    locDistrict: Sequelize.STRING,
    locSector: Sequelize.STRING,
    bio: Sequelize.STRING,
    photo: Sequelize.STRING,
    extra: Sequelize.STRING
  }, {});
  doctor.associate = function(models) {
    // associations can be defined here
  };
  return doctor;
};