const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./personas.route");
const docsRoute = require('./docs.route');
const usuarioRoute = require("./usuario.route");
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoute,
    },
    {
        path: "/personas",
        route: userRoute,
    },
    {
        path: "/usuario",
        route: usuarioRoute,
    },
];

const devRoutes = [
    {
        path: '/docs',
        route: docsRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    })
}

module.exports = router;
