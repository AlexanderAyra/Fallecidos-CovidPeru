const Persona = require('../model/personas');


const departSexo = async (res, param) => {

    const regex = new RegExp(param[1], 'i');

    const personaOne = await Persona.find({
        $or: [{ DEPARTAMENTO: regex }, { SEXO: regex }]
    })


    return res.json({
        personaOne
    })
}

const clasifDef = async (res, param) => {

    const regex = new RegExp(param[1], 'i');

    const personasOne = await Persona.find({ CLASIFICACION_DEF: regex })

    return res.json({
        personasOne
    })
}

const fechaCorte = async (res, param) => {

    const fechaCor = param[1];

    const personasOne = await Persona.find({ FECHA_CORTE: fechaCor })

    return res.json({
        personasOne
    })
}

const fechaFall = async (res, param) => {
    const fechaFall = param[1];

    const personaOne = await Persona.find({ FECHA_FALLECIMIENTO: fechaFall })

    return res.json({
        personaOne
    })
}

const edadDeclarada = async (res, param) => {

    const edadDecl = param[1]

    const personaOne = await Persona.find({ EDAD_DECLARADA: edadDecl })

    return res.json({
        personaOne
    })
}

const provDb = async (res, param) => {

    const termino = new RegExp(param[1], 'i');

    const personaOne = await Persona.find({ PROVINCIA: termino })

    return res.json({
        personaOne
    })
}

const distriDB = async (res, param) => {

    const regex = new RegExp(param[1], 'i');

    const personaOne = await Persona.find({ DISTRITO: regex })

    return res.json({
        personaOne
    })
}

const ubigeoDB = async (res, param) => {

    const regex = param[1]

    const personaOne = await Persona.find({ UBIGEO: regex })

    return res.json({
        personaOne
    })
}


module.exports = {
    departSexo,
    clasifDef,
    fechaCorte,
    fechaFall,
    edadDeclarada,
    provDb,
    distriDB,
    ubigeoDB
}