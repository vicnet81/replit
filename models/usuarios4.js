'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios4 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios4.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    login_method: DataTypes.ENUM('google', 'facebook')
  }, {
    sequelize,
    modelName: 'Usuarios4',
  });
  return Usuarios4;
};