'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.belongsToMany(models.recipe, { through: 'user_recipe' })
    }
  };
  user.init({
    name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
    validate: {
        isEmail: true
      }
    },
    password: DataTypes.TEXT,
    diet: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};