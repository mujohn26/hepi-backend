var Sequelize      = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const homeProgram = sequelize.define('homeProgram', {
    chefFamilyNames: Sequelize.STRING,
    age: Sequelize.INTEGER,
    district: Sequelize.STRING,
    sector: Sequelize.STRING,
    cell: Sequelize.STRING,
    tel: Sequelize.STRING,
    email: Sequelize.STRING,
    patientGenre: Sequelize.STRING,
    status: Sequelize.STRING,
    patientAge: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    patientStatus: Sequelize.STRING,
    visitDaysPerWeek: Sequelize.INTEGER
  }, {});
  homeProgram.associate = function (models) {
    // associations can be defined here
  };
  return homeProgram;
};
