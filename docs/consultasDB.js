const Persona = require("../model/personas");

const departSexo = async (res, param) => {
  const regexTerm = new RegExp(param.terminouno, "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ DEPARTAMENTO: regexTerm }),
    Persona.find({ DEPARTAMENTO: regexTerm }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const getSexo = async (res, param) => {
  const regexTerm = new RegExp(param.terminouno, "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ SEXO: regexTerm }),
    Persona.find({ SEXO: regexTerm }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const clasifDef = async (res, param) => {
  const regex = new RegExp(param.terminouno, "i");

  const [count, personasOne] = await Promise.all([
    Persona.countDocuments({ CLASIFICACION_DEF: regex }),
    Persona.find({ CLASIFICACION_DEF: regex }),
  ]);

  return res.json({
    count,
    personasOne,
  });
};

const fechaCorte = async (res, param) => {
  const fechaCor = new Date(param.terminouno);

  const [count, personasOne] = await Promise.all([
    Persona.countDocuments({ FECHA_CORTE: fechaCor }),
    Persona.find({ FECHA_CORTE: fechaCor }),
  ]);

  return res.json({
    count,
    personasOne,
  });
};

const fechaFall = async (res, param) => {
  const fechaFall = new Date(param.terminouno);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ FECHA_FALLECIMIENTO: fechaFall }),
    Persona.find({ FECHA_FALLECIMIENTO: fechaFall }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const edadDeclarada = async (res, param) => {
  const edadDecl = Number(param.terminouno);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ EDAD_DECLARADA: edadDecl }),
    Persona.find({ EDAD_DECLARADA: edadDecl }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const provDb = async (res, param) => {
  const termino = new RegExp(param.terminouno, "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ PROVINCIA: termino }),
    Persona.find({ PROVINCIA: termino }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const distriDB = async (res, param) => {
  const terminouno = param.terminouno.toUpperCase();
  const regex = new RegExp(terminouno, "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ DISTRITO: regex }),
    Persona.find({ DISTRITO: regex }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const ubigeoDB = async (res, param) => {
  const regex = Number(param.terminouno);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({ UBIGEO: regex }),
    Persona.find({ UBIGEO: regex }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

module.exports = {
  departSexo,
  getSexo,
  clasifDef,
  fechaCorte,
  fechaFall,
  edadDeclarada,
  provDb,
  distriDB,
  ubigeoDB,
};
