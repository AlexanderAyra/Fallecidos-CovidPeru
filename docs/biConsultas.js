const { count } = require("../model/personas");
const Persona = require("../model/personas");

const departEdad = async (res, param) => {
  const regex = new RegExp(param.terminouno.toUpperCase(), "i");
  const regex1 = Number(param.terminodos);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments({
      $and: [{ DEPARTAMENTO: regex }, { EDAD_DECLARADA: { $gt: regex1 } }],
    }),
    Persona.find({
      $and: [{ DEPARTAMENTO: regex }, { EDAD_DECLARADA: { $gt: regex1 } }],
    }),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const provinSexo = async (res, param) => {
  const regex = new RegExp(param.terminouno.toUpperCase(), "i");
  const regex1 = new RegExp(param.terminodos.toUpperCase(), "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([{ PROVINCIA: regex }, { SEXO: regex1 }]),
    Persona.find().and([{ PROVINCIA: regex }, { SEXO: regex1 }]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const distritFechFall = async (res, param) => {
  const regex = new RegExp(param[1], "i");
  const fecha = param[3];

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { DISTRITO: regex },
      { FECHA_FALLECIMIENTO: { $gt: fecha } },
    ]),
    Persona.find().and([
      { DISTRITO: regex },
      { FECHA_FALLECIMIENTO: { $gt: fecha } },
    ]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const fechaCorteDepa = async (res, param) => {
  const regex = new Date(param.terminouno);
  const regex1 = new RegExp(param.terminodos.toUpperCase(), "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { FECHA_CORTE_: { $gt: regex } },
      { DEPARTAMENTO: regex1 },
    ]),
    Persona.find().and([
      { FECHA_CORTE_: { $gt: regex } },
      { DEPARTAMENTO: regex1 },
    ]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const fechaFallEdad = async (res, param) => {
  const regex = new Date(param.terminouno);
  const regex1 = Number(param.terminodos);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { FECHA_FALLECIMIENTO: { $gt: regex } },
      { EDAD_DECLARADA: { $gt: regex1 } },
    ]),
    Persona.find().and([
      { FECHA_FALLECIMIENTO: { $gt: regex } },
      { EDAD_DECLARADA: { $gt: regex1 } },
    ]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const edadDeclarSexo = async (res, param) => {
  const regex = Number(param.terminouno);
  const regex1 = new RegExp(param.terminodos.toUpperCase(), "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { EDAD_DECLARADA: { $lt: regex } },
      { SEXO: regex1 },
    ]),
    Persona.find().and([{ EDAD_DECLARADA: { $lt: regex } }, { SEXO: regex1 }]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const sexoFechFall = async (res, param) => {
  const regex = new RegExp(param.terminouno.toUpperCase(), "i");
  const regex1 = new Date(param.terminodos);

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { SEXO: regex },
      { FECHA_FALLECIMIENTO: { $gt: regex1 } },
    ]),
    Persona.find().and([
      { SEXO: regex },
      { FECHA_FALLECIMIENTO: { $gt: regex1 } },
    ]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const clasifDefDepa = async (res, param) => {
  const regex = new RegExp(param.terminouno.toUpperCase(), "i");
  const regex1 = new RegExp(param.terminodos.toUpperCase(), "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([
      { CLASIFICACION_DEF: regex },
      { DEPARTAMENTO: regex1 },
    ]),
    Persona.find().and([
      { CLASIFICACION_DEF: regex },
      { DEPARTAMENTO: regex1 },
    ]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

const ubigeoDepa = async (res, param) => {
  const regex = Number(param.terminouno);
  const regex1 = new RegExp(param.terminodos.toUpperCase(), "i");

  const [count, personaOne] = await Promise.all([
    Persona.countDocuments().and([{ UBIGEO: regex }, { DEPARTAMENTO: regex1 }]),
    Persona.find().and([{ UBIGEO: regex }, { DEPARTAMENTO: regex1 }]),
  ]);

  return res.json({
    count,
    personaOne,
  });
};

module.exports = {
  departEdad,
  provinSexo,
  distritFechFall,
  fechaCorteDepa,
  fechaFallEdad,
  edadDeclarSexo,
  sexoFechFall,
  clasifDefDepa,
  ubigeoDepa,
};
