const express = require("express");
const routes = require("../router/v1");

const {conectDB} = require("../config/db");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.midlwares();

        this.routes();

        this.conectarDB();
    }

    async conectarDB() {
        await conectDB();
    }

    midlwares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/api", routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Corriendo en el puerto ", this.port);
        });
    }
}

module.exports = Server;
