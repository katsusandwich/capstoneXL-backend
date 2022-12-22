const express = require("express");
const router = express.Router();

class ScoresRouter {
  constructor(controller) {
    this.controller = controller;
    // this.auth = auth; and put auth in the constructor
  }
  routes() {
    // get all scores of user
    router.get(
      "/",
      // this.auth,
      this.controller.getAllScores.bind(this.controller)
    );

    //get one score of user
    router.get(
      "/:scoreId",
      // this.auth,
      this.controller.getOneScore.bind(this.controller)
    );

    //insert one score of user
    router.post(
      "/",
      // this.auth,
      this.controller.insertOneScore.bind(this.controller)
    );

    //delete one score of user
    router.delete(
      "/:scoreId",
      // this.auth,
      this.controller.deleteOneScore.bind(this.controller)
    );
    return router;
  }
}

module.exports = ScoresRouter;
