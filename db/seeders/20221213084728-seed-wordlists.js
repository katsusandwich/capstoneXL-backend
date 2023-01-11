"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "wordlists",
      [
        {
          userId: "auth0|63bbd21f15883ca1142adeb9",
          name: "Food words",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "auth0|63bbd21f15883ca1142adeb9",
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
