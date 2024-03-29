import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './User';

class Assignment extends Model {
  declare id: number;
  declare userId: number;
  declare description: string;
  declare created: Date;
  declare updated: Date;
}

Assignment.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, field: 'user_id' },
  description: DataTypes.STRING,
  created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  sequelize: db,
  tableName: 'assignments',
  timestamps: false,
  underscored: true
});

Assignment.belongsTo(User, {
  foreignKey: 'userId', as: 'user'
});

export default Assignment;