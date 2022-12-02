const { request, response } = require("express");

const Usuario = require("../model/user.model");
const catchAsync = require("../utils/catchAsync");
const { authService, tokenService } = require("../services");

const { generarToken } = require("../helpers/generar-jwt");

const login = catchAsync(async (req = request, res = response) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(
        email,
        password
    );
    const token = await tokenService.generateAuthTokens(user);
    res.json({ user, token });
});

module.exports = {
    login,
};
