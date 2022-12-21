const BaseController = require("./baseController");

class WordsController extends BaseController {
  constructor(model, wordlistModel, scoreModel, userModel) {
    super(model);
    this.wordlistModel = wordlistModel;
    this.scoreModel = scoreModel;
    this.userModel = userModel;
  }

  //get one word
  async getOneWord(req, res) {
    const { wordId } = req.params;
    try {
      const word = await this.wordModel.findByPk(wordId);
      return res.json(word);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one word
  async insertOneWord(req, res) {
    const { wordlistId } = req.params;
    const { word } = req.body;
    console.log(req.body);
    try {
      const newWord = await this.wordModel.create({
        wordlistId: wordlistId,
        word: word,
      });
      return res.json(newWord);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // edit one word
  async editWord(req, res) {
    const { wordId } = req.params;
    const { word } = req.body;
    console.log(req.body);
    try {
      const wordToAmend = await this.wordModel.findByPk(wordId);

      wordToAmend.set({
        wordId: wordId,
        word: word,
      });
      await wordToAmend.save();
      return res.json(wordToAmend);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // delete word
  async deleteWord(req, res) {
    const { wordlistId, wordId } = req.params;
    try {
      const deletedWord = await this.wordModel.destroy({
        where: {
          id: wordId,
          wordlistId: wordlistId,
        },
      });
      return res.json(deletedWord);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = WordsController;
