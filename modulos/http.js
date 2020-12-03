const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
    console.log("Nueva petición");
    console.log(req.url)

    switch(req.url){
        case "/hola": 
            res.write("Que dice la bandqui")
            res.end()
        break;
        default:
            res.write("Error 404: No sè lo que quieres")
            res.end()

    }

    // res.writeHead(201, {"Content-type": "text/plain"})

    // //Escribir respuesta al usuario
    // res.write("Hola, ya se usar http de NodeJs")

    // res.end()
}

console.log("Escuchando http en el puerto 3000")