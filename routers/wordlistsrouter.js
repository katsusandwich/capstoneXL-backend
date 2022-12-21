const express = require("express");
const router = express.Router();

class WordlistsRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    // get all wordlists
    router.get(
      "/:userId/wordlists",
      // this.auth,
      this.controller.getAllWordlists.bind(this.controller)
    );

    //get one wordlist
    router.get(
      "/:userId/wordlists/:wordlistId",
      // this.auth,
      this.controller.getOneWordlist.bind(this.controller)
    );

    // insert one wordlist for user
    router.post(
      "/:userId/wordlists",
      // this.auth,
      this.controller.insertOneWordlist.bind(this.controller)
    );

    //edit one wordlist Name
    router.put(
      "/:userId/wordlists/:wordlistName",
      // this.auth,
      this.controller.editWordlistName.bind(this.controller)
    );

    // delete one wordlist
    router.delete(
      "/:userId/wordlists/:wordlistId",
      // this.auth,
      this.controller.deleteOneWordlist.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordlistsRouter;
