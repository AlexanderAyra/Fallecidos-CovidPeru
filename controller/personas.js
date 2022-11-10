const { request, response } = require('express')
const Personas = require('../model/personas');
const { mostrarAll, paramsTwo, paramsFour, validarParams } = require('../docs/implemts')

const buscarAll = async (req = request, res = response) => {

    const count = Object.keys(req.params).length;
    const numArr = Object.entries(req.params);
    const counttwo = numArr[0].length;

    const erParm = validarParams(req.params, count);

    if (erParm) {
        return res.json({
            resp: `El Parametro: ${erParm} no esta permitida`
        })
    }

    switch (count) {
        case 0:
            mostrarAll(res, req.params);
            break;
        case 2:
            paramsTwo(res, req.params, count, counttwo);
            break;
        case 4:
            paramsFour(res, req.params, count, counttwo);
            break;
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            })

    }
}

const personasGetOne = async (req = request, res = response) => {
    const { edad, termino } = req.params

    const personaOne = await Personas.find()
        .where('EDAD_DECLARADA').gt(30).lt(60)

    res.json({
        personaOne
    })
}

const personasPost = async (req = request, res = response) => {

    const { FECHA_CORTE, FECHA_FALLECIMIENTO, EDAD_DECLARADA, SEXO, CLASIFICACION_DEF, UBIGEO, UUID, DEPARTAMENTO, PROVINCIA, DISTRITO } = req.body;

    const persoOne = new Personas({ FECHA_CORTE, FECHA_FALLECIMIENTO, EDAD_DECLARADA, SEXO, CLASIFICACION_DEF, UBIGEO, UUID, DEPARTAMENTO, PROVINCIA, DISTRITO });
    await persoOne.save();

    res.json({
        persoOne
    })

}


module.exports = {
    buscarAll,
    personasPost,
    personasGetOne
}