"use strict";
const { Model } = require("sequelize");
// import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.wordlist);
      this.belongsTo(models.user);
    }
  }
  word.init(
    {
      wordlistId: {
        type: DataTypes.INTEGER,
        references: {
          model: "wordlists",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      kanji: DataTypes.STRING,
      meanings: DataTypes.ARRAY(DataTypes.STRING),
      kunReadings: DataTypes.ARRAY(DataTypes.STRING),
      onReadings: DataTypes.ARRAY(DataTypes.STRING),
      nameReadings: DataTypes.ARRAY(DataTypes.STRING),
      needsRevision: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "word",
    }
  );
  return word;
};
