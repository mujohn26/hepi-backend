'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      modePay1: {
        type: Sequelize.STRING
      },
      accountNmbr1: {
        type: Sequelize.STRING
      },
      modePay2: {
        type: Sequelize.STRING
      },
      accountNmbr2: {
        type: Sequelize.STRING
      },
      locCountry: {
        type: Sequelize.STRING
      },
      locProvince: {
        type: Sequelize.STRING
      },
      locDistrict: {
        type: Sequelize.STRING
      },
      locSector: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      extra: {
        type: Sequelize.STRING
      },
      amount:{
        type: Sequelize.DECIMAL(10, 2)
      },
      agentCode:{
        type: Sequelize.STRING
  
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
    return queryInterface.dropTable('agents');
  }
};