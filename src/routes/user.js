const login = require("../controllers/login");
const postUser = require("../controllers/postUser");

const userRouter = require("express").Router();

userRouter.get("/login", login);
userRouter.post("/signup", postUser);

module.exports = userRouter;
