const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    //get one user
    router.get(
      "/:userId",
      // this.auth,
      this.controller.getOneUser.bind(this.controller)
    );

    //insert one user - what should the path be?
    router.post(
      "/",
      // this.auth,
      this.controller.insertOneUser.bind(this.controller)
    );

    // get all scores of user
    router.get(
      "/:userId/scores",
      // this.auth,
      this.controller.getAllScores.bind(this.controller)
    );

    //get one score of user
    router.get(
      "/:userId/scores/:scoreId",
      // this.auth,
      this.controller.getAllScores.bind(this.controller)
    );

    //insert one score of user
    router.post(
      "/:userId/scores",
      // this.auth,
      this.controller.insertOneScore.bind(this.controller)
    );

    //delete one score of user
    router.delete(
      "/:userId/scores/:scoreId",
      // this.auth,
      this.controller.deleteOneScore.bind(this.controller)
    );

    // get all wordlists
    router.get(
      "/:userId/wordlists",
      // this.auth,
      this.controller.getAllWordlists.bind(this.controller)
    );

    // insert one wordlist
    router.post(
      "/:userId/wordlists",
      // this.auth,
      this.controller.insertOneWordlist.bind(this.controller)
    );

    //edit one wordlist
    router.put(
      "/:userId/wordlists/:wordlistId",
      // this.auth,
      this.controller.editOneWordlist.bind(this.controller)
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

module.exports = UsersRouter;
