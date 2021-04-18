const mysql = require('mysql');
// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const connection = mysql.createConnection(
{
  host:'localhost',
  user:'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}
);
module.exports = connection;