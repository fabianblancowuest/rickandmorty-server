const http = require("http");
const PORT = 3001;
const data = require("./utils/data.js");

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {

        const idStartIndex = req.url.lastIndexOf("/") + 1;
        const id = req.url.substring(idStartIndex);

        const character = data.find((character) => character.id === Number(id));

        if (character) {
            return res
                .writeHead(200, { "Content-Type": "application/json" })
                .end(JSON.stringify(character));
        } else {
            return res
                .writeHead(404, { 'Content-Type': 'text/plain' })
                .end('Personaje no encontrado');
        }

    } else {
        return res
            .writeHead(404, { 'Content-Type': 'text/plain' })
            .end('Ruta inválida');
    }

});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto', PORT);
});


