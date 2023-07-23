const axios = require("axios");
const API_URL = "https://rickandmortyapi.com/api/character/";

function getById(res, id) {
    axios(API_URL + id)
        .then((response) => {
            const { data } = response;
            const character = {
                id: Number(id),
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location,
                episode: data.episode
            };

            // res.status(200).json(character);
            res.writeHead(200, { "Content-type": "application/json" });
            return res.end(JSON.stringify(character));
        })
        .catch((error) => {
            res.writeHead(404, { "Content-type": "text-plain" });
            return res.end(error.message);
            // res.status(500).contentType('text/plain').send(error.message);
        });
}

module.exports = {
    getById,
};
