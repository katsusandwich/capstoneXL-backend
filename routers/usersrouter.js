const express = require("express");
const router = express.Router();

class UsersRouter {
  constructor(controller, auth) {
    this.controller = controller;
    // this.auth = auth;
  }
  routes() {
    //get one user
    router.get(
      "/:userId",
      // this.auth,
      this.controller.getOneUser.bind(this.controller)
    );

    //insert one user
    router.post(
      "/",
      // this.auth,
      this.controller.insertOneUser.bind(this.controller)
    );

    //edit user - PROB NOT NEEDED
    router.put(
      "/:userId",
      // this.auth,
      this.controller.editOneUser.bind(this.controller)
    );

    //delete user - PROB NOT NEEDED
    router.delete(
      "/:userId",
      // this.auth,
      this.controller.deleteOneUser.bind(this.controller)
    );
    return router;
  }
}

module.exports = UsersRouter;
