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
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    plant_Season: {
      type: DataTypes.STRING,
    },
    fall_ind_seed: {
      type: DataTypes.DATEONLY,
    },
    fall_out_seed: {
      type: DataTypes.DATEONLY,
    },
    fall_out_seedling: {
      type: DataTypes.DATEONLY,
    },
    spring_ind_seedStr: {
      type: DataTypes.DATEONLY,
    },
    spring_ind_seedEnd: {
      type: DataTypes.DATEONLY,
    },
    spring_out_seedStr: {
      type: DataTypes.DATEONLY,
    },
    spring_out_seedEnd: {
      type: DataTypes.DATEONLY,
    },
    spring_transStr: {
      type: DataTypes.DATEONLY,
    },
    spring_transEnd: {
      type: DataTypes.DATEONLY,
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
