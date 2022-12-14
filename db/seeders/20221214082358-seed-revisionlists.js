"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "revisionlists",
      [
        {
          userId: "333",
          kanji: "罰",
          meanings: "penalty, punishment",
          kunreadings: "ばっ.する",
          onreadings: "バツ, バチ,ハツ",
          namereadings: "NA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("revisionlists", null, {});
  },
};
