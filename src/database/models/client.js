'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING },
    tel: { type: Sequelize.STRING, allowNull: false, unique: true },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Client' },
    status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Inactive' },

    invitedBy: Sequelize.STRING,
    nationality: Sequelize.STRING
  }, {});
  client.associate = function (models) {
    // associations can be defined here
  };
  return client;
};