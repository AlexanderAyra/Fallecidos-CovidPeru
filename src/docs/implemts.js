const Personas = require("../model/people.model");

const {
    departSexo,
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
    departEdad,
    provinSexo,
    distritFechFall,
    fechaCorteDepa,
    fechaFallEdad,
    edadDeclarSexo,
    sexoFechFall,
    clasifDefDepa,
    ubigeoDepa,
} = require("./biConsultas");

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
    // const personasAll = await Personas.find();
    // const count = personasAll.length;

    return res.json({
        total,
        personas,
    });
};

const paramsTwo = async (res, params) => {
    switch (params.consulta.toUpperCase()) {
        case "DEPARTAMENTO":
            departSexo(res, params);
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
            departEdad(res, params);
            break;
        case "PROVINCIA":
            provinSexo(res, params);
            break;
        case "DISTRITO":
            distritFechFall(res, params);
            break;
        case "FECHA_CORTE":
            fechaCorteDepa(res, params);
            break;
        case "FECHA_FALLECIMIENTO":
            fechaFallEdad(res, params);
            break;
        case "EDAD_DECLARADA":
            edadDeclarSexo(res, params);
            break;
        case "SEXO":
            sexoFechFall(res, params);
            break;
        case "CLASIFICACION_DEF":
            clasifDefDepa(res, params);
            break;
        case "UBIGEO":
            ubigeoDepa(res, params);
            break;
        default:
            return res.status(500).json({
                msg: "Verifica tu URL",
            });
    }
};

const paramsSix = async (res, params, count) => {
    const listCompleta = addConsultas(params, count);

    const fechaBusqueda = new Date(`${listCompleta[3]}T00:00:00.000+00:00`);
    const regex1 = listCompleta[0];

    res.json({
        msg: regex1,
    });
};

const validarParams = (params) => {
    let respt = {};
    if (!colecionesDB.includes(params.consulta.toUpperCase())) {
        return (respt.msg = params.consulta);
    }
    return false;
};

const addConsultas = (parms, count, counttwo) => {
    const listCons = [];
    let consList = Object.entries(parms);
    let addtwo = true;

    for (i = 0; i < count; i++) {
        let add = true;
        for (e = 0; e < counttwo; e++) {
            if (consList[i][e].toUpperCase() == "FECHA_CORTE") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(
                    `${consList[i + 1][e]}T00:00:00.000+00:00`
                );
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "FECHA_FALLECIMIENTO") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(
                    `${consList[i + 1][e]}T00:00:00.000+00:00`
                );
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "EDAD_DECLARADA") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = Number(consList[i + 1][e]);
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "UBIGEO") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = Number(consList[i + 1][e]);
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (
                consList[i][e].toUpperCase() == "EDAD_DECLARADA" ||
                consList[i][e].toUpperCase() == "SEXO" ||
                consList[i][e].toUpperCase() == "CLASIFICACION_DEF" ||
                consList[i][e].toUpperCase() == "DEPARTAMENTO" ||
                consList[i][e].toUpperCase() == "PROVINCIA" ||
                consList[i][e].toUpperCase() == "DISTRITO"
            ) {
                addtwo = true;
            }
        }
        if (add && addtwo) {
            listCons.push(consList[i][1]);
        }
    }

    return listCons;
};

module.exports = {
    mostrarAll,
    paramsTwo,
    paramsSix,
    paramsFour,
    validarParams,
};
