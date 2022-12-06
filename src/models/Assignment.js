module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    description: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'assignments',
    timestamps: false,
    underscored: true
  });

  Assignment.associate = ({ User }) => {
    Assignment.belongsTo(User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return Assignment;
};