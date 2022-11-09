const Personas = require('../model/personas');

const { twoParams } = require('./consultasDB');

const colecionesDB = [
    'USUARIO',
    'FECHA_CORTE',
    'FECHA_FALLECIMIENTO',
    'EDAD_DECLARADA',
    'SEXO',
    'CLASIFICACION_DEF',
    'DEPARTAMENTO',
    'PROVINCIA',
    'DISTRITO',
    'UBIGEO',
    'UUID'
]

const mostrarAll = async (res, params) => {

    const count = Object.keys(params).length;
    const personasAll = await Personas.find();

    return res.json({
        paramtros: count,
        personasAll
    })

}

const paramsTwo = async (res, params, count, counttwo) => {

    const listCompleta = addConsultas(params, count, counttwo);
    console.log(listCompleta);

    const termino = Object.entries(params)[1][1];

    // console.log(termino);
    const regex = new RegExp(termino.toUpperCase(), 'i');
    // console.log(regex);

    const personaOne = await Personas.find({
        $or: [{ DEPARTAMENTO: { $eq: regex } }, { DISTRITO: { $eq: regex } }, { PROVINCIA: regex }]
    })


    // const personaOne = await Personas.find()
    //     .or([{ DEPARTAMENTO: regex }, { PROVINCIA: regex }], { DISTRITO: regex })



    return res.json({
        personaOne
    })


    // let listConsultas = await addConsultas(params, count);
    // const tipoConsulta = listConsultas[0];

    // if (!colecionesDB.includes(tipoConsulta.toUpperCase())) {
    //     return res.json({
    //         msg: 'Correcto'
    //     })
    // }

    // switch (tipoConsulta.toUpperCase()) {
    //     case 'FECHA_CORTE':
    //         twoParams(res, params);
    //         break;
    //     case 'FECHA_FALLECIMIENTO':
    //         twoParams(res, params);
    //         break;
    //     case 'EDAD_DECLARADA':
    //         twoParams(res, params);
    //         break;
    //     case 'SEXO':
    //         twoParams(res, params);
    //         break;
    //     case 'CLASIFICACION_DEF':
    //         twoParams(res, params);
    //         break;
    //     case 'DEPARTAMENTO':
    //         twoParams(res, params);
    //         break;
    //     case 'PROVINCIA':
    //         twoParams(res, params);
    //         break;
    //     case 'DISTRITO':
    //         twoParams(res, params);
    //         break;
    //     case 'UBIGEO':
    //         twoParams(res, params);
    //         break;
    //     case 'UUID':
    //         twoParams(res, params);
    //         break;
    //     default:
    //         res.status(500).json({
    //             msg: 'No se encontro la consulta'
    //         })
    // }

}

const valorString = async (res, params, count) => {


}

const paramsFour = async (res, params, count) => {

    return res.json({
        msg: 'Todo va Bien en Four'
    })

}

const paramsSix = async (res, params, count) => {

    const listCompleta = addConsultas(params, count);

    // console.log(listCompleta);
    // const regex3 = new Date(listCompleta[3])
    const fechaBusqueda = new Date(`${listCompleta[3]}T00:00:00.000+00:00`);
    const regex1 = listCompleta[0];
    // const letra = regex1.toString();
    // console.log(regex1);

    res.json({
        msg: regex1
    })


    // console.log(fechaBusqueda);
    // const regex5 = new Date(listCompleta[5])
    // const regex1 = new RegExp(listCompleta[1], 'i');
    // const regex3 = new RegExp(listCompleta[3], 'i');
    // const regex5 = new RegExp(listCompleta[5], 'i');

    // const persTwo = await Personas.find({
    //     $and: [{ DEPARTAMENTO: regex1 }, { FECHA_FALLECIMIENTO: { $eq: fechaBusqueda } }, { EDAD_DECLARADA: { $lt: 75 } }]
    // })

    // const persOne = await Personas.find({ DEPARTAMENTO: regex1 })
    //     .where('FECHA_FALLECIMIENTO').equals(fechaBusqueda)
    //     .where('EDAD_DECLARADA').lt(75)


    // return res.json({
    //     persTwo
    // })

}

const paramsEight = async (res, params, count) => {

    return res.json({
        msg: 'Todo va Bien en Four'
    })

}

const validarParams = (paramet, count) => {

    let respt = {};
    for (i = 0; i < count; i++) {
        let resl = i % 2;
        if (resl == 0) {
            let incl = Object.entries(paramet)[i][1];
            if (!colecionesDB.includes(incl.toUpperCase())) {
                return respt.msg = incl
            }
        }
    }
    return false;

}

const addConsultas = (parms, count, counttwo) => {

    const listCons = [];
    let consList = Object.entries(parms);
    console.log(consList);
    let addtwo = true;
    // console.log(consList[0][1]);

    for (i = 0; i < count; i++) {
        let add = true;
        for (e = 0; e < counttwo; e++) {
            if (consList[i][e].toUpperCase() == 'FECHA_CORTE') {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(`${consList[i + 1][e]}T00:00:00.000+00:00`);
                listCons.push(fechaBusqueda);
                add = false
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == 'FECHA_FALLECIMIENTO') {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(`${consList[i + 1][e]}T00:00:00.000+00:00`);
                listCons.push(fechaBusqueda);
                add = false
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == 'EDAD_DECLARADA') {
                console.log('EDAD_DECLARADA');
            } else if (consList[i][e].toUpperCase() == 'UBIGEO') {
                console.log('UBIGEO');
            } else if (consList[i][e].toUpperCase() == 'UUID') {
                console.log('UUID');
            } else if (consList[i][e].toUpperCase() == 'EDAD_DECLARADA' ||
                consList[i][e].toUpperCase() == 'SEXO' ||
                consList[i][e].toUpperCase() == 'CLASIFICACION_DEF' ||
                consList[i][e].toUpperCase() == 'DEPARTAMENTO' ||
                consList[i][e].toUpperCase() == 'PROVINCIA' ||
                consList[i][e].toUpperCase() == 'DISTRITO') {
                addtwo = true;
            }
        }
        if (add && addtwo) {
            listCons.push(consList[i][1]);
        }
    }

    return listCons;

}

module.exports = {
    mostrarAll,
    paramsTwo,
    paramsFour,
    paramsSix,
    paramsEight,
    validarParams
}