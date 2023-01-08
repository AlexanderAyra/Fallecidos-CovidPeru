const Personas = require("../model/people.model");

const {
    getDepart,
    clasifDef,
    fechaCorte,
    fechaFall,
    edadDeclarada,
    provDb,
    distriDB,
    ubigeoDB,
    getSexo,
} = require("./consultasDB");

const {
    getDepartamet,
    getProvince,
    getDistrict,
    getDateDeath,
    getDateCourt,
    getStateAge,
    getSex,
    getDeathClassification,
    getUbigeo } = require('../docs/findQueryTwo')

const colecionesDB = [
    "USUARIO",
    "FECHA_CORTE",
    "FECHA_FALLECIMIENTO",
    "EDAD_DECLARADA",
    "SEXO",
    "CLASIFICACION_DEF",
    "DEPARTAMENTO",
    "PROVINCIA",
    "DISTRITO",
    "UBIGEO",
];

const mostrarAll = async (res) => {
    const [total, personas] = await Promise.all([
        Personas.countDocuments(),
        Personas.find(),
    ]);


    // const personasAll = await Personas.find({});
    // const count = personasAll.length;

    return res.json({
        count: total,
        personas
    });
};

const paramsTwo = async (res, params) => {

    switch (params.consulta.toUpperCase()) {
        case "DEPARTAMENTO":
            getDepart(res, params);
            break;
        case "SEXO":
            getSexo(res, params);
            break;
        case "CLASIFICACION_DEF":
            clasifDef(res, params);
            break;
        case "FECHA_CORTE":
            fechaCorte(res, params);
            break;
        case "FECHA_FALLECIMIENTO":
            fechaFall(res, params);
            break;
        case "EDAD_DECLARADA":
            edadDeclarada(res, params);
            break;
        case "PROVINCIA":
            provDb(res, params);
            break;
        case "DISTRITO":
            distriDB(res, params);
            break;
        case "UBIGEO":
            ubigeoDB(res, params);
            break;
        default:
            return res.status(500).json({
                msg: "Verifica tu URL",
            });
    }
};

const paramsFour = async (res, params) => {
    switch (params.consulta.toUpperCase()) {
        case "DEPARTAMENTO":
            getDepartamet(res, params);
            break;
        case "PROVINCIA":
            getProvince(res, params);
            break;
        case "DISTRITO":
            getDistrict(res, params);
            break;
        case "FECHA_CORTE":
            getDateCourt(res, params);
            break;
        case "FECHA_FALLECIMIENTO":
            getDateDeath(res, params);
            break;
        case "EDAD_DECLARADA":
            getStateAge(res, params);
            break;
        case "SEXO":
            getSex(res, params);
            break;
        case "CLASIFICACION_DEF":
            getDeathClassification(res, params);
            break;
        case "UBIGEO":
            getUbigeo(res, params);
            break;
        default:
            return res.status(500).json({
                msg: "Verifica tu URL",
            });
    }
};

const validarParams = (params) => {
    let respt = {};
    if (!colecionesDB.includes(params.consulta.toUpperCase())) {
        return (respt.msg = params.consulta);
    }
    return false;
};

module.exports = {
    mostrarAll,
    paramsTwo,
    paramsFour,
    validarParams,
};
