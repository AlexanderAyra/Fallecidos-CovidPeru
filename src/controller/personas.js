const { request, response } = require("express");
const People = require("../model/people.model");
const {
    mostrarAll,
    paramsTwo,
    paramsFour,
    validarParams,
} = require("../docs/implemts");

const buscarAll = async (req = request, res = response) => {
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

const personasPost = async (req = request, res = response) => {
    const {
        FECHA_CORTE,
        FECHA_FALLECIMIENTO,
        EDAD_DECLARADA,
        SEXO,
        CLASIFICACION_DEF,
        UBIGEO,
        UUID,
        DEPARTAMENTO,
        PROVINCIA,
        DISTRITO,
    } = req.body;

    const persoOne = new People({
        FECHA_CORTE,
        FECHA_FALLECIMIENTO,
        EDAD_DECLARADA,
        SEXO,
        CLASIFICACION_DEF,
        UBIGEO,
        UUID,
        DEPARTAMENTO,
        PROVINCIA,
        DISTRITO,
    });
    await persoOne.save();

    res.json({
        persoOne,
    });
};

module.exports = {
    buscarAll,
    personasPost,
};
