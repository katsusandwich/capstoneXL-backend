const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model, wordlistModel, scoreModel, wordModel) {
    super(model);
    this.wordlistModel = wordlistModel;
    this.scoreModel = scoreModel;
    this.wordModel = wordModel;
  }

  // get one user with userId
  // async getOneUser(req, res) {
  //   const { userId } = req.params;
  //   try {
  //     const user = await this.model.findByPk(userId);
  //     return res.json(user);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  //get one user with useremail

  async getOneUser(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne({ where: { email } });
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
}

module.exports = UsersController;
