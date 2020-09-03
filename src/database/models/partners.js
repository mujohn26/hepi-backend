'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  partners.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    image: Sequelize.STRING,
    display: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'partners',
  });
  return partners;
};