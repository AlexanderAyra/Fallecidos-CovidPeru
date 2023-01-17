const { request, response } = require("express");
const Usuario = require("../model/user.model");
const catchAsync = require("../utils/catchAsync");
const { authService, tokenService } = require("../services");

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

const login = catchAsync(async (req = request, res = response) => {
    const { email, password } = req.body;
    const user = await authService.loginUserWithEmailAndPassword(
        email,
        password
    );
    const token = await tokenService.generateAuthTokens(req, user);

    localStorage.setItem('token', token.access.token);

    // process.env.twoToken = token.access.token

    res.json({ user, token });
});

module.exports = {
    login,
};
