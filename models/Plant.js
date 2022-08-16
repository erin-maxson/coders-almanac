const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model { }

Plant.init(
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
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
  }
);

module.exports = Plant;
