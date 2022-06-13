require('dotenv').config();

module.exports = {
  port: process.env.MYQL_PORT,
  host: process.env.MYQL_HOST,
  database: process.env.MYQL_DATABASE,
  user: process.env.MYQL_USER,
};
