const cors = require("cors");
const express = require("express");
require("dotenv").config();

// const auth = require("./middlewares/auth");

const PORT = 8181;
const app = express();

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const WordsRouter = require("./routers/wordsRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const WordsController = require("./controllers/wordsController");

// importing DB
const db = require("./db/models/index");
const { user, wordlist, score, word } = db;

// initializing Controllers -> note the lowercase for the first word

const usersController = new UsersController(user, score, wordlist, word);

const wordsController = new WordsController(user, score, wordlist, word);

// initializing Routers - insert , auth here after usersController and wordsController if needed
const userRouter = new UsersRouter(usersController).routes();
const wordRouter = new WordsRouter(wordsController).routes();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// using the routers
app.use("/users", userRouter);
app.use("/:userId/wordlists/:wordlistId/", wordRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
