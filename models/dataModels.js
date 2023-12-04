// models/dataModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Data = sequelize.define("Data", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Data;
