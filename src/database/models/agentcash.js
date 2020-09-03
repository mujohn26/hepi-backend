'use strict';
var Sequelize= require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const agentCash = sequelize.define('agentCash', {
    bookingRequestId: Sequelize.INTEGER,
    amount: Sequelize.STRING,
    agentCode: Sequelize.DECIMAL(10, 2),
    status: Sequelize.STRING,
    state:Sequelize.STRING,
    isPaid: { type: Sequelize.BOOLEAN, defaultValue: false },

  }, {});
  agentCash.associate = function(models) {
    // associations can be defined here
  };
  return agentCash;
};