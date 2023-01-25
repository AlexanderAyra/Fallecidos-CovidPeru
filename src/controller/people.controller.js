const { request, response } = require("express");
const People = require("../model/people.model");
const { headerToken } = require("./auth.controller");
const { peopleService } = require('../services')
const {
    mostrarAll,
    paramsTwo,
    paramsFour,
    validarParams,
} = require("../docs/implemts");

const getAll = async (req = request, res = response) => {
    const count = Object.keys(req.params).length;
    if (count > 0) {
        const erParm = validarParams(req.params);
        if (erParm) {
            return res.json({
                resp: `El Parametro: ${erParm} no esta permitida`,
            });
        }
    }

    switch (count) {
        case 0:
            mostrarAll(res);
            break;
        case 2:
            paramsTwo(res, req.params);
            break;
        case 4:
            paramsFour(res, req.params);
            break;
        default:
            res.status(500).json({
                msg: "Se le olvido hacer esta busqueda",
            });
    }
};

const peoplePost = async (req = request, res = response) => {

    const person = await peopleService.createPeople(req.body)

    res.status(httpStatus.CREATED).send(person);
};

module.exports = {
    getAll,
    peoplePost,
};
