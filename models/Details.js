const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Details extends Model {}

Details.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plant_Season: {
            type: DataTypes.STRING,
            allowNullL: false,
        },
        seeding_date_indoor: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
        seeding_date_outdoor: {
            type: DataTypes.DATE,
            allowNull: false, 
        },
        seedling_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        plant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'plant',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true, 
        modelName: 'details',
    }
);

module.exports = Details;