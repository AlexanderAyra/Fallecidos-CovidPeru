const {request, response} = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../model/usuarios");
const catchAsync = require("../utils/catchAsync");
const {authService, tokenService} = require("../services");

const {generarToken} = require("../helpers/generar-jwt");

const login = catchAsync(async (req = request, res = response) => {
    const {correo, contraseña} = req.body;
    const user = await authService.loginUserWithEmailAndPassword(
        correo,
        contraseña
    );

    const token = await tokenService.generateAuthTokens(user);
    res.send({user, token});
});

module.exports = {
    login,
};
