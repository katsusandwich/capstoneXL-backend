const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, wordlistModel, scoreModel, wordModel) {
    super(model);
    this.wordlistModel = wordlistModel;
    this.scoreModel = scoreModel;
    this.wordModel = wordModel;
  }

  // get one user
  async getOneUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await this.model.findByPk(userId);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one user

  async insertOneUser(req, res) {
    const { id, email } = req.body;
    console.log(req.body);
    try {
      const newUser = await this.model.create({
        id: id,
        email: email,
      });
      return res.json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get all scores
  // insert one score
  // delete one score
  // get all wordlists
  // insert one wordlist
  // edit one wordlist
  // delete one wordlist
}

module.exports = UsersController;
