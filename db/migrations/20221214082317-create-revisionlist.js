"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("revisionlist", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.STRING,
      },
      kanji: {
        type: Sequelize.STRING,
      },
      meanings: {
        type: Sequelize.STRING,
      },
      kunreadings: {
        type: Sequelize.STRING,
      },
      onreadings: {
        type: Sequelize.STRING,
      },
      namereadings: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("revisionlist");
  },
};
