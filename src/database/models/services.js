'use strict';
module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define('services', {
    serviceName: DataTypes.STRING,
    staffId: DataTypes.INTEGER
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