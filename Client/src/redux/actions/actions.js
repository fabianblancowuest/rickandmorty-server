import { ADDFAVORITE, DELETEFAVORITE } from "./types";

// Action creators
const addFavorite = (objCharacter) => ({
	type: ADDFAVORITE,
	payload: objCharacter,
});

const deleteFavorite = (id) => ({
	type: DELETEFAVORITE,
	payload: id,
});

export { addFavorite, deleteFavorite };
