const express = require("express");
const router = express.Router();

class WordsRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    //get one word
    router.get(
      "/:userId/wordlists/:wordlistId/:wordId",
      // this.auth,
      this.controller.getOneWord.bind(this.controller)
    );

    // insert one word
    router.post(
      "/:userId/wordlists/:wordlistId",
      // this.auth,
      this.controller.insertOneWord.bind(this.controller)
    );

    //edit one word
    router.put(
      "/:userId/wordlists/:wordlistId/:wordId",
      // this.auth,
      this.controller.editOneWord.bind(this.controller)
    );

    // delete one word
    router.delete(
      "/:userId/wordlists/:wordlistId/:wordId",
      // this.auth,
      this.controller.deleteOneWord.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordsRouter;
