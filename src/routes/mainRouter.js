const { Router } = require("express");
const userRouter = require("./user");
const characterRouter = require("./character");
const favoriteRouter = require("./favorites");
const mainRouter = Router();
// const favoriteRouter = favoriteRouter;

mainRouter.use("/character", characterRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/favorites", favoriteRouter);

module.exports = mainRouter;
