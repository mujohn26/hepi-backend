'use strict';
module.exports = (sequelize, DataTypes) => {
  const agent = sequelize.define('agent', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: DataTypes.STRING,
    tel: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'agent' },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'pending' },
    nationality: DataTypes.STRING,
    modePay1: DataTypes.STRING,
    accountNmbr1: DataTypes.STRING,
    modePay2: DataTypes.STRING,
    accountNmbr2: DataTypes.STRING,
    locCountry: DataTypes.STRING,
    locProvince: DataTypes.STRING,
    locDistrict: DataTypes.STRING,
    locSector: DataTypes.STRING,
    bio: DataTypes.STRING,
    photo: DataTypes.STRING,
    extra: DataTypes.STRING
  }, {});
  agent.associate = function (models) {
    // associations can be defined here
  };
  return agent;
};