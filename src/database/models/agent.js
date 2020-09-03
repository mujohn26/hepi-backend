'use strict';
var Sequelize      = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const agent = sequelize.define('agent', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: Sequelize.STRING,
    tel: { type: Sequelize.STRING, allowNull: false, unique: true },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'agent' },
    status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'pending' },
    nationality: Sequelize.STRING,
    modePay1: Sequelize.STRING,
    accountNmbr1: Sequelize.STRING,
    modePay2: Sequelize.STRING,
    accountNmbr2: Sequelize.STRING,
    locCountry: Sequelize.STRING,
    locProvince: Sequelize.STRING,
    locDistrict: Sequelize.STRING,
    locSector: Sequelize.STRING,
    bio: Sequelize.STRING,
    photo: Sequelize.STRING,
    extra: Sequelize.STRING,
    amount: Sequelize.DECIMAL(10, 2),
    agentCode: Sequelize.STRING

  }, {});
  agent.associate = function (models) {
    // associations can be defined here
  };
  return agent;
};