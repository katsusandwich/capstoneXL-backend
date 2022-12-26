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
      const word = await this.model.findByPk(wordId);
      return res.json(word);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one word
  async insertOneWord(req, res) {
    const {
      wordlistId,
      userId,
      kanji,
      meanings,
      kunReadings,
      onReadings,
      namereadings,
    } = req.body;
    console.log(req.body);
    try {
      const newWord = await this.model.create({
        wordlistId: wordlistId,
        userId,
        kanji,
        meanings,
        kunReadings,
        onReadings,
        namereadings,
        needsRevision: false,
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
      const wordToAmend = await this.model.findByPk(wordId);

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

  // delete word - here I have tried removing reference to wordlist id as a param
  async deleteWord(req, res) {
    const { wordId } = req.params;
    try {
      const deletedWord = await this.model.destroy({
        where: {
          id: wordId,
        },
      });
      return res.json(deletedWord);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = WordsController;
