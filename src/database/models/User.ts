import { DataTypes, Model } from 'sequelize';
import db from '.';
import Assignment from './Assignment';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: false,
  underscored: true
})

User.hasMany(Assignment, {
  foreignKey: 'userId', as: 'assignments'
});

export default User;  