import { ADDFAVORITE, DELETEFAVORITE } from "../actions/types";

const initialGlobalState = {
	favorites: [],
	character: [],
	access: false,
};

const rootReducer = (state = initialGlobalState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADDFAVORITE:
			return { ...state, favorites: [...state.favorites, payload] };
		case DELETEFAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((character) => {
					return character.id !== Number(payload);
				}),
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
