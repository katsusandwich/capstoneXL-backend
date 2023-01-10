const express = require("express");
const router = express.Router();

class WordlistsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    // get all wordlists of user
    router.get(
      "/:userId",
      // this.auth,
      this.controller.getAllWordlists.bind(this.controller)
    );

    //get one wordlist by wordlistId
    router.get(
      "/:userId/:wordlistId",
      // this.auth,
      this.controller.getOneWordlist.bind(this.controller)
    );

    // insert one wordlist for user
    router.post(
      "/",
      this.auth,
      this.controller.insertOneWordlist.bind(this.controller)
    );

    //edit one wordlist Name
    router.put(
      "/:wordlistName",
      this.auth,
      this.controller.editWordlistName.bind(this.controller)
    );

    // delete one wordlist
    router.delete(
      "/:wordlistId",
      this.auth,
      this.controller.deleteOneWordlist.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordlistsRouter;
