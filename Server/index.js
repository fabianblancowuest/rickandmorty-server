const http = require("http");
const dotenv = require("dotenv").config();
const { PORT } = process.env;
const { getById } = require("./controllers/getChardById");
// const data = require("./utils/data");
const LOCALHOST = "http://localhost:5173";

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Cors --> Le damos acceso a todos ("*");

    const id = req.url.split("/").at(-1);
    if (req.url.includes("onsearch")) {
        // const id = req.url.lastIndexOf("/") + 1;
        // const id = req.url.split("/").pop();
        return getById(res, id);
    }

    if (req.url.includes("detail")) {
        return getById(res, id);
    }
});

server.listen(PORT, () => {
    console.log("Server listening on port", PORT, "Running on", LOCALHOST);
});
