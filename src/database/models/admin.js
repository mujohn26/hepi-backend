module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    tel: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Admin' },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'pending' },
  }, {});
  admin.associate = function (models) {
    // associations can be defined here
  };
  return admin;
};