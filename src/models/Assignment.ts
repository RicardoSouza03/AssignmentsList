import { DataTypes, Model } from 'sequelize';
import db from '.';

class Assignment extends Model {
  declare id: number;
  declare userId: number;
  declare description: string;
  declare created: Date;
  declare updated: Date;
}

Assignment.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: DataTypes.INTEGER,
  description: DataTypes.STRING,
  created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  sequelize: db,
  tableName: 'assignments',
  timestamps: false,
  underscored: true
});

export default Assignment;