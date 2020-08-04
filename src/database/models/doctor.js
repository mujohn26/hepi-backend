'use strict';
module.exports = (sequelize, DataTypes) => {
  const doctor = sequelize.define('doctor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: DataTypes.STRING,
    tel: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Doctor' },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Inactive' },
    nationality: DataTypes.STRING,
    educationLevel: DataTypes.STRING,
    licence: DataTypes.STRING,
    locProvince: DataTypes.STRING,
    locDistrict: DataTypes.STRING,
    locSector: DataTypes.STRING,
    bio: DataTypes.STRING,
    photo: DataTypes.STRING,
    extra: DataTypes.STRING
  }, {});
  doctor.associate = function(models) {
    // associations can be defined here
  };
  return doctor;
};