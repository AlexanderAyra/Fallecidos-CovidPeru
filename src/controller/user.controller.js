const { request, response } = require("express");
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync')
const pick = require('../utils/pick')
const { userService } = require('../services')
const bcryptjs = require('bcryptjs');

const Usuario = require("../model/user.model");

const getUsers = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await userService.queryUsers(filter, options);
    res.send(result);
})

const createUser = async (req = request, res = response) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send(user);
};

const usuarioPut = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, name, lastName, password, ...resto } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
        resto.name = name;
        resto.lastName = lastName;
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario,
    });
};

module.exports = {
    getUsers,
    createUser,
    usuarioPut,
};
