"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Words", {
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
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      kanji: {
        type: Sequelize.STRING,
      },
      meanings: {
        type: Sequelize.ARRAY,
      },
      kunReadings: {
        type: Sequelize.ARRAY,
      },
      onReadings: {
        type: Sequelize.ARRAY,
      },
      nameReadings: {
        type: Sequelize.ARRAY,
      },
      needsRevision: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Words");
  },
};
