"use strict";
const { Model } = require("sequelize");
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class testscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  testscore.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      score: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "testscore",
    }
  );
  return testscore;
};
