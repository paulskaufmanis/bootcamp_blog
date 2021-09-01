const mysql = require("mysql2");

require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bootcamp_blog",
  waitForConnections: true,
  connectionLimit: 10,
});

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
// });

module.exports = pool;

// DB_HOST='localhost',
// DB_USER='root',
// DB_PASS='',
// DB_NAME='bootcamp_blog',
