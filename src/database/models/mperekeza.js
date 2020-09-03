'use strict';
const {
  Model,Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mperekeza extends Model {
    static associate(models) {
      // define association here
    } 
  };
  mperekeza.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    province: Sequelize.STRING,
    district: Sequelize.STRING,
    sector: Sequelize.STRING,
    cell: Sequelize.STRING,
    tel: Sequelize.STRING,
    email: Sequelize.STRING,
    startDate: Sequelize.DATE,
    service: Sequelize.STRING,
    visits: Sequelize.INTEGER,
    price: Sequelize.DECIMAL,
    status: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'mperekeza',
  });
  return mperekeza;
};