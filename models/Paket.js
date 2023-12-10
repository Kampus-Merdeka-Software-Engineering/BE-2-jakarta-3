const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Paket extends Model {}

Paket.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    tanggal_berangkat: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    awalan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tujuan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Paket',
});

module.exports = Paket;
