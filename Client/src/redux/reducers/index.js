import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER } from "../actions/types";

const initialGlobalState = {
	favorites: [],
	// character: [],
	allCharacters: [],
	// access: false,
};

const rootReducer = (state = initialGlobalState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADDFAVORITE:
			return {
				...state,
				favorites: [...state.favorites, payload],
				allCharacters: [...state.allCharacters, payload],
			};
		case DELETEFAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((character) => {
					return character.id !== Number(payload);
				}),
				allCharacters: state.allCharacters.filter(
					(character) => character.id !== Number(payload),
				),
			};
		case FILTER:
			// eslint-disable-next-line no-case-declarations
			const allCharactersFiltered = state.allCharacters.filter(
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
		default:
			return { ...state };
	}
};

export default rootReducer;
