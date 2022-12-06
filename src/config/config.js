require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql'
}

module.exports = {
  devlopment: {
    ...config,
    database: 'assignments_list_development'
  },
  test: {
    ...config,
    database: 'assignments_list_test'
  },
  production: {
    ...config,
    database: 'assignments_list_production'
  },
}
