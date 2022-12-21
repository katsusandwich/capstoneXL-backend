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
    return router;
  }
}

module.exports = UsersRouter;
