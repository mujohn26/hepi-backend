'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    sector: DataTypes.STRING,
    service: DataTypes.STRING,
    proposedDoctorId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    status: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,

  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
    bookings.belongsTo(
      models.doctor,
      { foreignKey: 'proposedDoctorId' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
  };
  return bookings;
};