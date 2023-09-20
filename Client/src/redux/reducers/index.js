import {
	ADDFAVORITE,
	CLEAN_SCREEN,
	DELETEFAVORITE,
	DELETE_CHARACTER,
	FILTER,
	ORDER,
	SEARCH_BY_ID,
} from "../actions/types";

const initialGlobalState = {
	favorites: [],
	// character: [],
	favoritesCopy: [],
	characters: [],
	// access: false,
};

const rootReducer = (state = initialGlobalState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADDFAVORITE:
			return {
				...state,
				favorites: [...state.favorites, payload],
				favoritesCopy: [...state.favoritesCopy, payload],
			};
		case DELETEFAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((character) => {
					return character.id !== Number(payload);
				}),
				favoritesCopy: state.favoritesCopy.filter(
					(character) => character.id !== Number(payload),
				),
			};
		case FILTER:
			// eslint-disable-next-line no-case-declarations
			const allCharactersFiltered = state.favoritesCopy.filter(
				(character) => character.gender === payload,
			);
			return {
				...state,
				favorites: allCharactersFiltered,
			};
		case ORDER:
			// eslint-disable-next-line no-case-declarations
			const sortedCharacters = [...state.favorites];
			if (payload === "A") {
				sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
				// objetos.sort((a, b) => a.nombre.localeCompare(b.nombre))
				// sortedCharacters.sort((a, b) => a.id - b.id);
			} else {
				sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
			}
			return {
				...state,
				favorites: sortedCharacters,
			};
		case SEARCH_BY_ID:
			return {
				...state,
				characters: [...state.characters, payload],
			};
		case DELETE_CHARACTER: {
			return {
				...state,
				characters: state.characters.filter((character) => {
					return character.id !== Number(payload);
				}),
			};
		}
		case CLEAN_SCREEN:
			return {
				...state,
				characters: [],
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
