"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      tel: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      sector: {
        type: Sequelize.STRING,
      },
      service: {
        type: Sequelize.STRING,
      },
      proposedDoctorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "doctors",
          key: "id",
        },
      },
      startDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bookings");
  },
};
