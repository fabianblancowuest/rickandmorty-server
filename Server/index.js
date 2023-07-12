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
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Personaje no encontrado');
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta inválida');
    }

});

server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto 3001');
});


