"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class wordlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  wordlist.init(
    {
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      kanji: DataTypes.STRING,
      meanings: DataTypes.STRING,
      kunreadings: DataTypes.STRING,
      onreadings: DataTypes.STRING,
      namereadings: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "wordlist",
    }
  );
  return wordlist;
};
