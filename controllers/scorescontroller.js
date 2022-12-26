const BaseController = require("./baseController");

class ScoresController extends BaseController {
  constructor(model, wordlistModel, userModel, wordModel) {
    super(model);
    this.wordlistModel = wordlistModel;
    this.userModel = userModel;
    this.wordModel = wordModel;
  }

  // get all scores
  async getAllScores(req, res) {
    const { userId } = req.params;
    try {
      const score = await this.model.findAll({
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
      const scorePercentage = await this.model.findByPk(scoreId);
      return res.json(scorePercentage);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // insert one score
  async insertOneScore(req, res) {
    const { userId, scorePercentage } = req.body;
    console.log(req.body);
    try {
      const newScorePercentage = await this.model.create({
        userId: userId,
        scorePercentage: scorePercentage,
      });
      return res.json(newScorePercentage);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // delete one score - removed userid as a param
  async deleteOneScore(req, res) {
    const { scoreId } = req.params;
    try {
      const deletedScore = await this.model.destroy({
        where: {
          id: scoreId,
        },
      });
      return res.json(deletedScore);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ScoresController;
