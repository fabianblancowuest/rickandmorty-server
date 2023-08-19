import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "./types";

// Action creators
const addFavorite = (objCharacter) => ({
	type: ADDFAVORITE,
	payload: objCharacter,
});

const deleteFavorite = (id) => ({
	type: DELETEFAVORITE,
	payload: id,
});

const filterCards = (gender) => {
	return {
		type: FILTER,
		payload: gender,
	};
};

const orderCards = (orden) => {
	return {
		type: ORDER,
		payload: orden,
	};
};

export { addFavorite, deleteFavorite, filterCards, orderCards };
