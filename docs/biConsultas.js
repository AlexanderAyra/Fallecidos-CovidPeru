const Persona = require('../model/personas');

const departEdad = async (res, param) => {

    const regex = new RegExp(param[1], 'i');
    const regex1 = param[3]

    const personaOne = await Persona.find({
        $and: [{ DEPARTAMENTO: regex }, { EDAD_DECLARADA: { $gt: regex1 } }]
    })

    return res.json({
        personaOne
    })
}

const provinSexo = async (res, param) => {

    console.log(param);

    const regex = new RegExp(param[1], 'i');
    const regex1 = new RegExp(param[3], 'i');

    const personaOne = await Persona.find()
        .and([{ PROVINCIA: regex }, { SEXO: regex1 }])

    return res.json({
        personaOne
    })
}

const distritFechFall = async (res, param) => {

    const regex = new RegExp(param[1], 'i');
    const fecha = param[3]

    const personaOne = await Persona.find()
        .and([{ DISTRITO: regex }, { FECHA_FALLECIMIENTO: { $gt: fecha } }])

    return res.json({
        personaOne
    })
}

const fechaCorteDepa = async (res, param) => {

    const regex = param[1];
    const regex1 = new RegExp(param[3], 'i');

    const personaOne = await Persona.find()
        .and([{ FECHA_CORTE_: { $gt: regex } }, { DEPARTAMENTO: regex1 }])

    return res.json({
        personaOne
    })
}

const fechaFallEdad = async (res, param) => {
    console.log(param);

    const regex = param[1];
    const regex1 = param[3];

    const personaOne = await Persona.find()
        .and([{ FECHA_FALLECIMIENTO: { $gt: regex } }, { EDAD_DECLARADA: { $gt: regex1 } }])

    return res.json({
        personaOne
    })
}

const edadDeclarSexo = async (res, param) => {

    const regex = param[1];
    const regex1 = new RegExp(param[3], 'i');

    const personaOne = await Persona.find()
        .and([{ EDAD_DECLARADA: { $lt: regex } }, { SEXO: regex1 }])

    return res.json({
        personaOne
    })
}

const sexoFechFall = async (res, param) => {

    const regex = new RegExp(param[1], 'i');
    const regex1 = param[3];

    const personaOne = await Persona.find()
        .and([{ SEXO: regex }, { FECHA_FALLECIMIENTO: { $gt: regex1 } }])

    return res.json({
        personaOne
    })
}

const clasifDefDepa = async (res, param) => {

    const regex = new RegExp(param[1], 'i');
    const regex1 = new RegExp(param[3], 'i');

    const personaOne = await Persona.find()
        .and([{ CLASIFICACION_DEF: regex }, { DEPARTAMENTO: regex1 }])

    return res.json({
        personaOne
    })
}

const ubigeoDepa = async (res, param) => {

    console.log(param);

    const regex = param[1];
    const regex1 = new RegExp(param[3], 'i');

    const personaOne = await Persona.find().and([{ UBIGEO: regex }, { DEPARTAMENTO: regex1 }]);


    const count = personaOne.length;

    return res.json({
        count,
        personaOne
    })
}


module.exports = {
    departEdad,
    provinSexo,
    distritFechFall,
    fechaCorteDepa,
    fechaFallEdad,
    edadDeclarSexo,
    sexoFechFall,
    clasifDefDepa,
    ubigeoDepa
}