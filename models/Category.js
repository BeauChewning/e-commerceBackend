const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  //product
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true//this one
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,
      is: 10,
      isNumeric: true
    },
    category_id:{
      type: DataTypes.INTEGER,
      refrences:{
        model: "Category",
        key: "id"
      }
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
