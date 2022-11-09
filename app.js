require('dotenv').config({ path: '.example.env' });
const Server = require('./model/server');

const server = new Server();

server.listen();
