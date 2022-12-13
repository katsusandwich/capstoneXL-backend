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
          kanji: "蜜",
          meanings: "honey, nectar, molasses",
          kunreadings: "NA",
          onreadings: "ミツ, ビツ",
          namereadings: "NA",
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
