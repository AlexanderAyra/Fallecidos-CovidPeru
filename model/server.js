const express = require("express");

const { conectDB } = require("../config/db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      personas: "/api/personas",
      usuario: "/api/usuario",
      auth: "/api/auth",
    };

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
    this.app.use(this.path.personas, require("../router/personas"));
    this.app.use(this.path.usuario, require("../router/usuario"));
    this.app.use(this.path.auth, require("../router/auth"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Corriendo en el puerto ", this.port);
    });
  }
}

module.exports = Server;
