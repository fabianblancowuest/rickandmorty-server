import { ADDFAVORITE, DELETEFAVORITE } from "./types";

// Action creators
const addFavorite = (id) => ({
	type: ADDFAVORITE,
	payload: id,
});

const deleteFavorite = (id) => ({
	type: DELETEFAVORITE,
	payload: id,
});

export { addFavorite, deleteFavorite };
