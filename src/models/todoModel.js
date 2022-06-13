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
    console.log('insertData ===', insertData);
    return insertData;
  } catch (error) {
    console.log('error in model ===', error);
    return error;
  }
}

module.exports = {
  insertTodoDb,
};
