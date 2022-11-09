const express = require('express');

const { conectDB } = require('../db/config');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            personas: '/api/personas'
        }

        this.midlwares();

        this.routes();

        this.conectarDB();

    }

    async conectarDB() {
        await conectDB();
    }

    midlwares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.path.personas, require('../router/personas'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto ', this.port);
        })
    }
}


module.exports = Server;