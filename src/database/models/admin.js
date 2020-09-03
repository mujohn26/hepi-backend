var Sequelize      = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    tel: { type: Sequelize.STRING, allowNull: false, unique: true },
    role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Admin' },
    status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'active' },
  }, {});
  admin.associate = function (models) {
    // associations can be defined here
  };
  return admin;
};