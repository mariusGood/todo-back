require('dotenv').config();

module.exports = {
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
};
