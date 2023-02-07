require('dotenv').config();
import { Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '1234',
  database: 'assigmentList',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
}

module.exports = config;
