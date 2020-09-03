'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const servicePricing = sequelize.define('servicePricing', {
    price: Sequelize.INTEGER,
    serviceName: Sequelize.STRING
  }, {});
  servicePricing.associate = function(models) {
    // associations can be defined here
  };
  return servicePricing;
};