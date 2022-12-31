const express = require("express");
const router = express.Router();

class WordsRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    //get all words
    router.get("/", this.controller.getAllWords.bind(this.controller));

    //get one word
    router.get(
      "/:wordId",
      // this.auth,
      this.controller.getOneWord.bind(this.controller)
    );

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
