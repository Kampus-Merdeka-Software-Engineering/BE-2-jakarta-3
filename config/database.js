// backend/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();
// const sequelize = new Sequelize('penerbangan2', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     port: process.env.DB_PORT,
//   }
// );

// const sequelize = new Sequelize(process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_DATABASE, "mysql", process.env.DB_PORT, process.env.DB_HOST); 
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});
module.exports = sequelize;
