const express = require("express");
const router = express.Router();

class WordlistsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get all wordlists
    router.get(
      "/:userId/wordlists",
      this.auth,
      this.controller.getAllWordlists.bind(this.controller)
    );

    //delete a user wordlist
    // if i didn't put /:wordlistId here, then it needs to be the param of the request
    router.delete(
      "/:userId/wordlists/:wordlistId",
      this.auth,
      this.controller.deleteOneWordlist.bind(this.controller)
    );

    //edit a user wordlist which includes deleting words within wordlist
    router.put(
      "/:userId/wordlists/:wordlistId",
      this.controller.editOneWordlist.bind(this.controller)
    );

    // //delete all user wordlists [ignore]
    // router.delete(
    //   "/:userId/wordlists/",
    //   this.auth,
    //   this.controller.deleteAllWordlist.bind(this.controller)
    // );

    //get all words in specific user's wordlist
    router.get(
      "/:userId/wordlists/:wordlistId",
      this.auth,
      this.controller.getAllWords.bind(this.controller)
    );

    //delete all words in specific user's wordlist
    router.delete(
      "/:userId/wordlists/",
      this.auth,
      this.controller.deleteAllWords.bind(this.controller)
    );

    //delete a word in specific user's wordlist
    router.delete(
      "/:userId/wordlists/:wordlistId/deleteword",
      this.auth,
      this.controller.deleteOneWord.bind(this.controller)
    );

    //edit a word in a specific user's wordlist
    router.put(
      "/:userId/wordlists/:wordlistId/editword",
      this.controller.editOneWord.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordlistsRouter;
