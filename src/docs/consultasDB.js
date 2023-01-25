const { People } = require("../model");

const getDepart = async (res, param) => {
    const regexTerm = new RegExp(param.termino, "i");

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ DEPARTAMENTO: regexTerm }),
        People.find({ DEPARTAMENTO: regexTerm }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const getSexo = async (res, param) => {
    const regexTerm = new RegExp(param.termino, "i");

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ SEXO: regexTerm }),
        People.find({ SEXO: regexTerm }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const clasifDef = async (res, param) => {
    const regex = new RegExp(param.termino, "i");

    const [count, personasOne] = await Promise.all([
        People.countDocuments({ CLASIFICACION_DEF: regex }),
        People.find({ CLASIFICACION_DEF: regex }),
    ]);

    return res.json({
        count,
        personasOne,
    });
};

const fechaCorte = async (res, param) => {
    const fechaCor = new Date(param.termino);

    const [count, personasOne] = await Promise.all([
        People.countDocuments({ FECHA_CORTE: fechaCor }),
        People.find({ FECHA_CORTE: fechaCor }),
    ]);

    return res.json({
        count,
        personasOne,
    });
};

const fechaFall = async (res, param) => {
    const fechaFall = new Date(param.termino);

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ FECHA_FALLECIMIENTO: fechaFall }),
        People.find({ FECHA_FALLECIMIENTO: fechaFall }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const edadDeclarada = async (res, param) => {
    const edadDecl = Number(param.termino);

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ EDAD_DECLARADA: edadDecl }),
        People.find({ EDAD_DECLARADA: edadDecl }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const provDb = async (res, param) => {
    const termino = new RegExp(param.termino, "i");

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ PROVINCIA: termino }),
        People.find({ PROVINCIA: termino }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const distriDB = async (res, param) => {
    const termino = param.termino.toUpperCase();
    const regex = new RegExp(termino, "i");

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ DISTRITO: regex }),
        People.find({ DISTRITO: regex }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

const ubigeoDB = async (res, param) => {
    const regex = Number(param.termino);

    const [count, personaOne] = await Promise.all([
        People.countDocuments({ UBIGEO: regex }),
        People.find({ UBIGEO: regex }),
    ]);

    return res.json({
        count,
        personaOne,
    });
};

module.exports = {
    getDepart,
    getSexo,
    clasifDef,
    fechaCorte,
    fechaFall,
    edadDeclarada,
    provDb,
    distriDB,
    ubigeoDB,
};
