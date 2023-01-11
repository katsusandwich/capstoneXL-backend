"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const userId = await queryInterface.sequelize.query("SELECT id from USERS");

    await queryInterface.bulkInsert(
      "words",
      [
        {
          wordlistId: 1,
          userId: "auth0|63bbd21f15883ca1142adeb9",
          kanji: "蜜",
          meanings: ["honey", "nectar", "molasses"],
          // kunReadings: [""],
          onReadings: ["ミツ", "ビツ"],
          // nameReadings: [""],
          needsRevision: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordlistId: 1,
          userId: "auth0|63bbd21f15883ca1142adeb9",
          kanji: "塩",
          meanings: ["salt"],
          kunReadings: ["しお"],
          onReadings: ["エン"],
          // nameReadings: [""],
          needsRevision: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          wordlistId: 2,
          userId: "auth0|63bbd21f15883ca1142adeb9",
          kanji: "猫",
          meanings: ["cat"],
          kunReadings: ["ねこ"],
          onReadings: ["ビョウ"],
          // nameReadings: [""],
          needsRevision: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("words", null, {});
  },
};
