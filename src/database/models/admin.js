module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {type: DataTypes.STRING,allowNull:false},
    password: { type: DataTypes.STRING, allowNull: false },
    tel: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false , defaultValue:'Admin'},
    status: { type: DataTypes.STRING, allowNull: false, defaultValue:'Active' },
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
  };
  return admin;
};