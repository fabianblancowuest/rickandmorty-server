const axios = require("axios");

const getCharById = (req, res) => {
	const { id } = req.params;
	const URL = `https://rickandmortyapi.com/api/character/${id}`;
	console.log(id);
	console.log(typeof id);
	axios
		.get(URL)
		.then((response) => {
			const { data } = response;
			if (data.error) {
				return res.status(404).send(data.error);
			}
			const character = {
				id: Number(data.id),
				name: data.name,
				gender: data.gender,
				species: data.species,
				origin: data.origin?.name,
				image: data.image,
				status: data.status,
				// location: data.location,
				// episode: data.episode,
			};
			return res.status(200).json(character);
		})
		.catch((axiosError) => res.status(500).send(axiosError.message));
};

module.exports = getCharById;
