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
  async getAllScores(req, res) {
    const { userId } = req.params;
    try {
      const score = await this.scoreModel.findAll({
        where: { userId: userId },
      });
      return res.json(score);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get one score
  async getOneScore(req, res) {
    const { scoreId } = req.params;
    try {
      const score = await this.scoreModel.findByPk(scoreId);
      return res.json(score);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one score
  async insertOneScore(req, res) {
    const { userId } = req.params;
    const { score } = req.body;
    console.log(req.body);
    try {
      const newScore = await this.scoreModel.create({
        userId: userId,
        score: score,
      });
      return res.json(newScore);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // delete one score
  async deleteOneScore(req, res) {
    const { userId, scoreId } = req.params;
    try {
      const deletedScore = await this.scoreModel.destroy({
        where: {
          id: scoreId,
          userId: userId,
        },
      });
      return res.json(deletedScore);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // get all wordlists
  async getAllWordlists(req, res) {
    const { userId } = req.params;
    try {
      const allWordlists = await this.wordlistModel.findAll({
        where: { userId: userId },
      });
      return res.json(allWordlists);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get one wordlist
  async getOneWordlist(req, res) {
    const { wordlistId } = req.params;
    try {
      const wordlist = await this.wordlistModel.findByPk(wordlistId);
      return res.json(wordlist);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one wordlist
  async insertOneWordlist(req, res) {
    const { userId } = req.params;
    const { wordlist } = req.body;
    console.log(req.body);
    try {
      const newWordlist = await this.wordlistModel.create({
        userId: userId,
        wordlist: wordlist,
      });
      return res.json(newWordlist);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // edit one wordlist
  async editWordlist(req, res) {
    const { wordlistId } = req.params;
    const { wordlist } = req.body;
    console.log(req.body);
    try {
      const wordlistToAmend = await this.wordlistModel.findByPk(wordlistId);

      wordlistToAmend.set({
        wordlist: wordlist,
      });
      await wordlistToAmend.save();
      return res.json(wordlistToAmend);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // delete one wordlist
  async deleteOneWordlist(req, res) {
    const { userId, wordlistId } = req.params;
    try {
      const deletedWordlist = await this.wordlistModel.destroy({
        where: {
          id: wordlistId,
          userId: userId,
        },
      });
      return res.json(deletedWordlist);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = UsersController;
