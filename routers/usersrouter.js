const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get one user by userId
    // router.get(
    //   "/:userId",
    //   // this.auth,
    //   this.controller.getOneUser.bind(this.controller)
    // );

    //get one user by email
    router.get(
      "/:email",
      // this.auth,
      this.controller.getOneUser.bind(this.controller)
    );

    //insert one user - what should the path be?
    router.post(
      "/",
      this.auth,
      this.controller.insertOneUser.bind(this.controller)
    );
    return router;
  }
}

module.exports = UsersRouter;
