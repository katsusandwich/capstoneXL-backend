"use strict";
const { Model } = require("sequelize");
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  score.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      scorePercentage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "score",
    }
  );
  return score;
};
