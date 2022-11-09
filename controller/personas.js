const { request, response } = require('express')
const Personas = require('../model/personas');
const { mostrarAll,
    paramsTwo,
    paramsFour,
    paramsSix,
    paramsEight,
    validarParams } = require('../docs/implemts')

const colecionesDB = [
    'USUARIO',
    'FECHA_FALLECIMIENTO',
    'EDAD_DECLARADA',
    'SEXO',
    'DEPARTAMENTO',
    'PROVINCIA',
    'DISTRITO',
    'UBIGEO'
]

const buscarAll = async (req = request, res = response) => {

    const erParm = validarParams(req.params);

    const count = Object.keys(req.params).length;
    console.log(count);

    if (erParm) {
        return res.json({
            resp: `El Parametro: ${erParm} no esta permitida`
        })
    }

    // let busqueda = Object.entries(req.params)[0][1]

    switch (count) {
        case 0:
            mostrarAll(res, req.params);
            break;
        case 2:
            paramsTwo(res, req.params, count);
            break;
        case 4:
            paramsFour(res, req.params, count);
            break;
        case 6:
            paramsSix(res, req.params, count);
            break;
        case 8:
            paramsEight(res, req.params, count);
            break;
        default:
            res.status(500).json({
                msg: 'Se le olvido hacer esta busqueda'
            })

    }

    // switch (count) {
    //     case 'USUARIO':
    //         // mostrarAll(res, req.params);
    //         break;
    //     case 'FECHA_FALLECIMIENTO':
    //         // metodo();
    //         break;
    //     case 'EDAD_DECLARADA':
    //         // metodo();
    //         break;
    //     case 'SEXO':
    //         // metodo();
    //         break;
    //     case 'DEPARTAMENTO':
    //         mostrarAll(res, req.params);
    //         break;
    //     case 'PROVINCIA':
    //         // metodo();
    //         break;
    //     case 'DISTRITO':
    //         // metodo();
    //         break;
    //     case 'UBIGEO':
    //         // metodo();
    //         break;

    //     default:
    //         res.status(500).json({
    //             msg: 'Se le olvido hacer esta busqueda'
    //         })

    // }

    // const personaOne = await Personas.find({ DEPARTAMENTO: 'LIMA' });

    // res.json({
    //     personaOne
    // })
}

const countParams = (paramt) => {
    const count = Object.keys(paramet).length;
    return count
}

const personasGetOne = async (req = request, res = response) => {
    const { edad, termino } = req.params

    // const regex = new RegExp(termino, 'i');

    const personaOne = await Personas.find()
        .where('EDAD_DECLARADA').gt(30).lt(60)

    res.json({
        personaOne
    })
}

const personasPost = async (req = request, res = response) => {

    const { DEPARTAMENTO, PROVINCIA, DISTRITO } = req.body;

    const persoOne = new Personas({ DEPARTAMENTO, PROVINCIA, DISTRITO });
    await persoOne.save();

    res.json({
        resp: persoOne
    })

}

const getPersonas = async (req = request, res = response) => {

}


module.exports = {
    buscarAll,
    personasPost,
    personasGetOne
}