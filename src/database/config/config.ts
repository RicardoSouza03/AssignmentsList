require('dotenv').config();
import { Options } from 'sequelize'

const config: Options = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
}

module.exports = config;
