const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Paket = require('./Paket');

class Tiket extends Model {}

Tiket.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_lengkap: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kode_booking: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tanggal_booking: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    kode_kursi: {
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
    modelName: 'Tiket',
});

Tiket.belongsTo(Paket);


module.exports = Tiket;
