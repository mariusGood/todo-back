const mysql = require('mysql2/promise');
const dbConfigs = require('../dbConfigs');

async function insertTodoDb(data) {
  try {
    const connection = await mysql.createConnection(dbConfigs);
    const sql = `
    INSERT INTO list (title) 
    VALUES (?)`;
    const [insertData] = await connection.execute(sql, [data.title]);
    await connection.close();
    return insertData;
  } catch (error) {
    console.log('error ===', error);
    return error;
  }
}

async function getDataFromDb() {
  try {
    const connection = await mysql.createConnection(dbConfigs);
    const sql = `
    SELECT * FROM list`;
    const [data] = await connection.execute(sql);
    await connection.close();
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = {
  insertTodoDb,
  getDataFromDb,
};
