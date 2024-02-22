// Database
const { conn } = require("./db_connection");
// Express
const express = require("express");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;

// Otras dependencias/bibliotecas
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");

// Permisos -> Cors
server.use(cors());

const yellowColor = "\x1b[33m",
	blueColor = "\x1b[36m",
	resetColor = "\x1b[0m";

// Texto que se imprime al levantar el servidor
const message = `${yellowColor}Server raised in port ${blueColor}${PORT}${resetColor}`;

// Middlewares
server.use(express.json()); //Para poder recibir JSON por req.body
server.use(morgan("dev")); //Muestra en la consola como sale la req y res

// Función para probar que el servidor estee funcionando
server.get("/health-check", (req, res) => {
	res.send("Working");
});

// Routers --> Rutas que voy a usar
server.use("/rickandmorty", mainRouter);
// server.use("/rickandmorty", router);

server.listen(PORT, "0.0.0.0", () => {
	conn.sync({ force: false });
	console.log(message);
});
