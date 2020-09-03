'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('homePrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chefFamilyNames: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      cell: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      patientGenre: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      patientAge: {
        type: Sequelize.INTEGER
      },
      patientStatus: {
        type: Sequelize.STRING
      },
      visitDaysPerWeek: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('homePrograms');
  }
};