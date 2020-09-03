'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const advesoryCenter = sequelize.define('advesoryCenter', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    tel: Sequelize.STRING,
    province: Sequelize.STRING,
    district: Sequelize.STRING,
    sector: Sequelize.STRING,
    adversoryMean: Sequelize.STRING,
    status: Sequelize.STRING,
    price: Sequelize.INTEGER,
    visit: Sequelize.INTEGER,
    date: Sequelize.DATE
  }, {});
  advesoryCenter.associate = function(models) {
    // associations can be defined here
  };
  return advesoryCenter;
};