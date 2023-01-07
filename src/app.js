require("dotenv").config({ path: "./.example.env" });
const logger = require("./config/logger");
const Server = require("./model/server.model");

const server = new Server();

server.listen();
serveClose = server.serverClose;

const exitHandler = () => {
    if (server) {
        serveClose.close(() => {
            logger.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
    if (server) {
        server.close();
    }
});

