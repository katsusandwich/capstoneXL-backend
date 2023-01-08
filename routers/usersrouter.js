const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    //get one user
    router.get("/:userId", this.controller.getOneUser.bind(this.controller));

    //insert one user - what should the path be?
    router.post("/", this.controller.insertOneUser.bind(this.controller));
    return router;
  }
}

module.exports = UsersRouter;
