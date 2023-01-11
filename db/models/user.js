"use strict";
const { Model } = require("sequelize");
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.wordlist);
      this.hasMany(models.score);
    }
  }
  user.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
