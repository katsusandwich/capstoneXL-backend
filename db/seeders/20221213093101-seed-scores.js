"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "scores",
      [
        {
          userId: "auth0|63bbd21f15883ca1142adeb9",
          scorePercentage: "50",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("scores", null, {});
  },
};
