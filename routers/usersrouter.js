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
      this.controller.getOne.bind(this.controller)
    );

    //insert one user
    router.post(
      "/",
      // this.auth,
      this.controller.insertOne.bind(this.controller)
    );

    //edit user
    router.put(
      "/:userId",
      // this.auth,
      this.controller.editUser.bind(this.controller)
    );

    //delete user
    router.delete(
      "/:userId",
      // this.auth,
      this.controller.deleteOneUser.bind(this.controller)
    );
    return router;
  }
}

module.exports = UsersRouter;
