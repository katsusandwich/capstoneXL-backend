const express = require("express");
const router = express.Router();

class WordlistsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    //get one user
    router.get(
      "/:userId",
      this.auth,
      this.controller.getOne.bind(this.controller)
    );

    //insert one user
    router.post(
      "/",
      this.auth,
      this.controller.insertOne.bind(this.controller)
    );

    //edit user
    router.put(
      "/:userId",
      this.auth,
      this.controller.editUser.bind(this.controller)
    );

    //get all wordlists
    router.get(
      "/:userId/wordlists",
      this.auth,
      this.controller.getAllWordlists.bind(this.controller)
    );

    //delete a user wordlist
    router.delete(
      "/:userId/wordlists/:wordlistId",
      this.auth,
      this.controller.deleteOneWordlist.bind(this.controller)
    );

    //edit a user wordlist
    router.put(
      "/:userId/wordlists/:wordlistId",
      this.controller.editOneWordlist.bind(this.controller)
    );

    //delete a user all wordlists
    router.delete(
      "/:userId/wordlists/",
      this.auth,
      this.controller.deleteAllWordlist.bind(this.controller)
    );

    //get all words in specific user's wordlist
    router.get(
      "/:userId/wordlists",
      this.auth,
      this.controller.getAllItems.bind(this.controller)
    );

    //delete a word in specific user's wordlist
    router.delete(
      "/:userId/wordlists/:shoppingCartId",
      this.auth,
      this.controller.deleteOneItem.bind(this.controller)
    );

    //edit an item in specific user's shopping cart
    router.put(
      "/:userId/shoppingCart/:shoppingCartId",
      this.controller.editOneItem.bind(this.controller)
    );

    //delete all items in specific user's shopping cart
    router.delete(
      "/:userId/shoppingCart/",
      this.auth,
      this.controller.deleteAllItems.bind(this.controller)
    );

    return router;
  }
}

module.exports = WordlistsRouter;
