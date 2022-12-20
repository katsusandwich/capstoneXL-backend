const cors = require("cors");
const express = require("express");
require("dotenv").config();

// const auth = require("./middlewares/auth");

const PORT = 8181;
const app = express();

// importing Routers
const UsersRouter = require("./routers/usersRouter");
const ScoresRouter = require("./routers/scoresRouter");
const WordlistsRouter = require("./routers/wordlistsRouter");
const WordsRouter = require("./routers/wordsRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");
const ScoresController = require("./controllers/scoresController");
const WordlistsController = require("./controllers/wordlistsController");
const WordsController = require("./controllers/wordsController");

// importing DB
const db = require("./db/models/index");
const { score, user, word, wordlist } = db;

// initializing Controllers -> note the lowercase for the first word
const fabricsController = new FabricsController(fabric);
const collarsController = new CollarsController(collar);
const backsController = new BacksController(back);
const cuffsController = new CuffsController(cuff);
const frontsController = new FrontsController(front);
const pocketsController = new PocketsController(pocket);

const usersController = new UsersController(
  user,
  measurement,
  wishlist,
  fabric,
  cuff,
  collar,
  back,
  front,
  pocket,
  shoppingCart
);

const orderController = new OrderController(
  order,
  user,
  measurement,
  order_detail,
  fabric,
  cuff,
  collar,
  back,
  front,
  pocket,
  shoppingCart
);
const orderDetailsController = new OrderDetailsController(order_detail);
const wishlistsController = new WishlistsController(wishlist);

// inittializing Routers
const fabricRouter = new FabricsRouter(fabricsController).routes();
const collarRouter = new CollarsRouter(collarsController).routes();
const backRouter = new BacksRouter(backsController).routes();
const cuffRouter = new CuffsRouter(cuffsController).routes();
const frontRouter = new FrontsRouter(frontsController).routes();
const pocketRouter = new PocketsRouter(pocketsController).routes();

const userRouter = new UsersRouter(usersController, auth).routes();
// const userRouter = new UsersRouter(usersController).routes();

const orderRouter = new OrderRouter(orderController, auth).routes();
const orderDetailsRouter = new OrderDetailsRouter(
  orderDetailsController
).routes();

const wishlistRouter = new WishlistsRouter(wishlistsController).routes();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// using the routers
app.use("/fabrics", fabricRouter);
app.use("/collars", collarRouter);
app.use("/backs", backRouter);
app.use("/cuffs", cuffRouter);
app.use("/fronts", frontRouter);
app.use("/pockets", pocketRouter);

app.use("/users", userRouter);

app.use("/orders", orderRouter);
app.use("/wishlists", wishlistRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
