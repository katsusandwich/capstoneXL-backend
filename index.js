const cors = require("cors");
const express = require("express");
require("dotenv").config();
const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});

// const PORT = process.env.PORT;
const PORT = 8181;
const app = express();

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const WordsRouter = require("./routers/wordsRouter");
const WordlistsRouter = require("./routers/wordlistsRouter");
const ScoresRouter = require("./routers/scoresRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const WordsController = require("./controllers/wordsController");
const WordlistsController = require("./controllers/wordlistsController");
const ScoresController = require("./controllers/scoresController");

// importing DB
const db = require("./db/models/index");
const { user, wordlist, score, word } = db;

// initializing Controllers -> note the lowercase for the first word

const usersController = new UsersController(user, score, wordlist, word);
const wordsController = new WordsController(word, wordlist, score, user);
const wordlistsController = new WordlistsController(
  wordlist,
  user,
  score,
  word
);
const scoresController = new ScoresController(score, wordlist, user, word);

// initializing Routers
const userRouter = new UsersRouter(usersController, checkJwt).routes();
const wordRouter = new WordsRouter(wordsController, checkJwt).routes();
const wordlistRouter = new WordlistsRouter(
  wordlistsController,
  checkJwt
).routes();
const scoreRouter = new ScoresRouter(scoresController, checkJwt).routes();

// Enable CORS access to this server
app.use(cors());

// using the routers
app.use("/users", userRouter);
app.use("/words", wordRouter);
app.use("/wordlists", wordlistRouter);
app.use("/scores", scoreRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
