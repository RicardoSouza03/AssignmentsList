module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true
  });

  User.associate = ({ Assignment }) => {
    User.hasMany(Assignment, {
      foreignKey: 'userId', as: 'assignments'
    });
  }

  return User;
};