'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING },
    tel: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'client' },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'inactive' },

    invitedBy: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {});
  client.associate = function (models) {
    // associations can be defined here
  };
  return client;
};