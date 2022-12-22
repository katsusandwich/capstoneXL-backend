const BaseController = require("./baseController");

class WordlistsController extends BaseController {
  constructor(model, userModel, scoreModel, wordModel) {
    super(model);
    this.userModel = userModel;
    this.scoreModel = scoreModel;
    this.wordModel = wordModel;
  }
  // get all wordlists of user
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

  // edit wordlist name
  async editWordlistName(req, res) {
    const { wordlistId } = req.params;
    const { wordlistName } = req.body;
    console.log(req.body);
    try {
      const wordlistNameToAmend = await this.wordlistModel.findByPk(wordlistId);

      wordlistNameToAmend.set({
        wordlistName: wordlistName,
      });
      await wordlistNameToAmend.save();
      return res.json(wordlistNameToAmend);
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

module.exports = WordlistsController;
