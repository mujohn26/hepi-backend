'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const counseling = sequelize.define('counseling', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    tel: Sequelize.STRING,
    province: Sequelize.STRING,
    district: Sequelize.STRING,
    sector: Sequelize.STRING,
    counselingMean: Sequelize.STRING,
    status: Sequelize.STRING,
    type: Sequelize.STRING,
    price: Sequelize.INTEGER,
    visit: Sequelize.INTEGER,
    date: Sequelize.DATE
  }, {});
  counseling.associate = function(models) {
    // associations can be defined here
  };
  return counseling;
};
