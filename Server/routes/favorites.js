const express = require("express");
const {
	getFav,
	postFav,
	deleteFav,
} = require("../controllers/handleFavorites");

const favoriteRouter = express.Router();

favoriteRouter.get("/", getFav);
favoriteRouter.post("/", postFav);
favoriteRouter.delete("/:id", deleteFav);

module.exports = favoriteRouter;
