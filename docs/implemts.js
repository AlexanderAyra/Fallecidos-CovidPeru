const Personas = require('../model/personas');

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

const mostrarAll = async (res, params) => {

    const count = Object.keys(params).length;
    const personasAll = await Personas.find();

    return res.json({
        paramtros: count,
        personasAll
    })

}

const paramsTwo = async (res, params, count) => {

    let consulta = [];
    addConsultas(params, count);

    return res.json({
        msg: 'Todo va Bien en Two'
    })

}

const paramsFour = async (res, params, count) => {

    return res.json({
        msg: 'Todo va Bien en Four'
    })

}

const paramsSix = async (res, params, count) => {

    const listCompleta = addConsultas(params, count);

    console.log(listCompleta);
    const regex3 = new Date(listCompleta[3])
    const fechaBusqueda = new Date(`${listCompleta[3]}T00:00:00.000+00:00`);
    console.log(fechaBusqueda);
    // const regex5 = new Date(listCompleta[5])
    const regex1 = new RegExp(listCompleta[1], 'i');
    // const regex3 = new RegExp(listCompleta[3], 'i');
    const regex5 = new RegExp(listCompleta[5], 'i');

    const persTwo = await Personas.find({
        $and: [{ DEPARTAMENTO: regex1 }, { FECHA_FALLECIMIENTO: { $eq: fechaBusqueda } }, { EDAD_DECLARADA: { $lt: 75 } }]
    })

    // const persOne = await Personas.find({ DEPARTAMENTO: regex1 })
    //     .where('FECHA_FALLECIMIENTO').equals(fechaBusqueda)
    //     .where('EDAD_DECLARADA').lt(75)


    return res.json({
        persTwo
    })

}

const paramsEight = async (res, params, count) => {

    return res.json({
        msg: 'Todo va Bien en Four'
    })

}

const validarParams = (paramet) => {

    let respt = {};
    const count = Object.keys(paramet).length;
    for (i = 0; i < count; i++) {
        let resl = i % 2;
        if (resl == 0) {
            let incl = Object.entries(paramet)[i][1];
            if (!colecionesDB.includes(incl)) {
                return respt.msg = incl
            }
        }
    }
    return false;

}

const addConsultas = (parms, count) => {

    const listCons = [];
    let consList = Object.entries(parms);

    for (i = 0; i < count; i++) {
        listCons.push(consList[i][1]);
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