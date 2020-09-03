'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  testimonial.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    message: Sequelize.STRING,
    display: Sequelize.BOOLEAN
  }, {
    sequelize,
    modelName: 'testimonial',
  });
  return testimonial;
};