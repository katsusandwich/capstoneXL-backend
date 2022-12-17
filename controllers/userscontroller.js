const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(
    model,
    // userModel,
    wordlistModel,
    scoreModel
  ) {
    super(model);
    // this.userModel = userModel;
    this.wordlistModel = wordlistModel;
    this.scoreModel = scoreModel;
  }

  // Insert user
  async insertOneUser(req, res) {
    const { id, username, email } = req.body;
    console.log(req.body);
    try {
      const newUser = await this.model.create({
        id: id,
        username: username,
        email: email,
      });
      return res.json(newUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific user
  async getOneUser(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne(email);
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // async getOne(req, res) {
  //   const { userId } = req.params;
  //   try {
  //     const user = await this.model.findByPk(userId);
  //     return res.json(user);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  //   const project = await Project.findOne({ where: { title: 'My Title' } });
  // if (project === null) {
  //   console.log('Not found!');
  // } else {
  //   console.log(project instanceof Project); // true
  //   console.log(project.title); // 'My Title'
  // }

  // Edit specific user's username
  async editOneUser(req, res) {
    const { username } = req.body;
    const { email } = req.params;
    console.log(req.body);
    try {
      const user = await this.model.findOne(email);

      user.set({
        username: username,
      });
      await user.save();
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // Delete user
  async deleteOneUser(req, res) {
    const { username, email } = req.params;
    try {
      const deletedUser = await this.userModel.destroy({
        where: {
          username: username,
          email: email,
        },
      });
      return res.json(deletedUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
