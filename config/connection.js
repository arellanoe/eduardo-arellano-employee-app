const mysql = require('mysql2');

//require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // TODO: Add MySQL password
  password: 'Thunderjc1992!',
  database: 'employees'
});

module.exports = connection;
