const express = require('express');
const cors = require('cors');
const router = require('../routes/usuarios');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        // Directorio publico
        this.app.use(express.static('public'));

        // Lectura y parseo del body
        this.app.use( express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${process.env.PORT}...`);
        });
    }
}

module.exports = Server;