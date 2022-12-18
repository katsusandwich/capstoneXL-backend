"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("words", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      wordlistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "wordlists",
          key: "id",
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      kanji: {
        type: Sequelize.STRING,
      },
      meanings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      kunReadings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      onReadings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      nameReadings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      needsRevision: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("words");
  },
};
