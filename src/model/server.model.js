const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const config = require("../config/config");
const { jwtStrategy } = require("../config/passport");
const routes = require("../router/v1");
const { swaggerDocs } = require('../docs/swaggerDef')

const { conectDB } = require("../config/db");

class Server {
    constructor() {
        this.app = express();
        this.serverClose = null;
        this.port = config.port;

        this.midlwares();

        this.routes();

        this.conectarDB();
    }

    async conectarDB() {
        await conectDB();
    }

    midlwares() {
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(xss());
        this.app.use(mongoSanitize());
        this.app.use(compression());
        this.app.use(cors());
        this.app.options('*', cors());
        this.app.use(passport.initialize());
        passport.use('jwt', jwtStrategy)
    }

    routes() {
        this.app.use("/api", routes);
    }

    listen() {
        this.serverClose = this.app.listen(this.port, () => {
            localStorage.clear();
            console.log("Corriendo en el puerto ", this.port);
            swaggerDocs(this.app, this.port)
        });
    }
}

module.exports = Server;
