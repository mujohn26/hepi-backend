'use strict';
var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define('services', {
    serviceName: Sequelize.STRING,
    staffId: Sequelize.INTEGER
  }, {});
  services.associate = function(models) {
    // associations can be defined here
    services.belongsTo(
      models.doctor,
      { foreignKey: 'staffId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
  };
  return services;
};