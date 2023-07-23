// if (req.url.includes("/rickandmorty/character")) {

    //     const idStartIndex = req.url.lastIndexOf("/") + 1;
    //     const id = req.url.substring(idStartIndex);

    //     const character = data.find((character) => character.id === Number(id));

    //     if (character) {
    //         return res
    //             .writeHead(200, { "Content-Type": "application/json" })
    //             .end(JSON.stringify(character));
    //     } else if (id === "") {
    //         return res
    //             .writeHead(404, { 'Content-Type': 'text/plain' })
    //             // .end(`Personaje ${id} no encontrado `);
    //             .end("¡Ingrese un ID!")
    //     } else if (typeof id !== "number") {
    //         return res
    //             .writeHead(404, { 'Content-Type': 'text/plain' })
    //             // .end(`Personaje ${id} no encontrado `);
    //             .end("¡No existen personajes con ese ID!\n¡Ingrese un ID válido!");
    //     } else {
    //         return res
    //             .writeHead(404, { 'Content-Type': 'text/plain' })
    //             // .end(`Personaje ${id} no encontrado `);
    //             .end("Pesonaje no encontrado");
    //     }

    // } else {
    //     return res
    //         .writeHead(404, { 'Content-Type': 'text/plain' })
    //         .end('Ruta inválida');
    // }