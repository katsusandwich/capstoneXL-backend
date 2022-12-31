"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "wordlists",
      [
        {
          userId: "333",
          name: "Food words",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "333",
          name: "Animals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("wordlists", null, {});
  },
};
