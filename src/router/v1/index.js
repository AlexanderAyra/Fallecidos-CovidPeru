const express = require("express");
const authRoute = require("./auth.route");
const personasRoute = require("./personas.route");
const usuarioRoute = require("./usuario.route");

const router = express.Router();

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoute,
    },
    {
        path: "/personas",
        route: personasRoute,
    },
    {
        path: "/usuario",
        route: usuarioRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
