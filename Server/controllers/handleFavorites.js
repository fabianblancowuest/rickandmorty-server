let myFavorites = [];

const postFav = (req, res) => {
	const newFavorite = req.body;

	myFavorites.push(newFavorite);

	return res.json(myFavorites);
};

const deleteFav = (req, res) => {
	const { id } = req.params;

	const filteredFavorites = myFavorites.filter(
		(character) => character.id !== Number(id),
	);
	myFavorites = filteredFavorites;
	return res.json(myFavorites);
};

const getFav = (req, res) => {
	return res.json(myFavorites);
};

module.exports = {
	postFav,
	deleteFav,
	getFav,
};
