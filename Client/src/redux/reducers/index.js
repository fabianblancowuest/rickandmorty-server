const initialGlobalState = {
	favorites: [],
	access: false,
};

const rootReducer = (state = initialGlobalState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "AGREGAR":
	}
};

export default rootReducer;
