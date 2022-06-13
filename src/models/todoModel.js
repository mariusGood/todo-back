const mysql = require('mysql2/promise');
const dbConfigs = require('../dbConfigs');

async function insertTodoDb(data) {
  try {
    const connection = await mysql.createConnection(dbConfigs);
    const insertData = connection.execute(
      `INSERT INTO list (title) 
       VALUES (${mysql.escape(data.title)})`
    );
    connection.end();
    return insertData;
  } catch (error) {
    return error;
  }
}

module.exports = {
  insertTodoDb,
};
