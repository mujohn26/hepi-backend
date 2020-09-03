'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};