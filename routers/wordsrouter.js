const express = require("express");
const router = express.Router();

class WordsRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    //get all words given wordlistId
    router.get(
      "/:wordlistId",
      this.controller.getAllWordsByWordlist.bind(this.controller)
    );

    //get all words given wordlistId that have a kunReadings
    router.get(
      "/:wordlistId/kunReadings",
      this.controller.getAllWordsByWordlistWithKunReadings.bind(this.controller)
    );

    //get all words generally - if you want this you have to change the controller to A and disable get all words given wordlistId
    // router.get("/", this.controller.getAllWords.bind(this.controller));

    //get one word - I am disabling this assuming you will never need this but works with A
    // router.get(
    //   "/:wordId",
    //   // this.auth,
    //   this.controller.getOneWord.bind(this.controller)
    // );

    // insert one word
    router.post(
      "/",
      // this.auth,
      this.controller.insertOneWord.bind(this.controller)
    );

    //edit word
    router.put(
      "/:wordId",
      // this.auth,
      this.controller.editWord.bind(this.controller)
    );

    // delete word
    router.delete(
      "/:wordId",
      // this.auth,
      this.controller.deleteWord.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordsRouter;
