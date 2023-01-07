const { People } = require('../model')

const getDepartamet = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');


  switch (queryTwo) {
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DEPARTAMENTO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ DEPARTAMENTO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getProvince = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ PROVINCIA: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ PROVINCIA: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getDistrict = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ DISTRITO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ DISTRITO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getDateDeath = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ FECHA_FALLECIMIENTO: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getDateCourt = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ FECHA_CORTE: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ FECHA_CORTE: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getStateAge = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ EDAD_DECLARADA: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ EDAD_DECLARADA: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getSex = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ SEXO: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ SEXO: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getDeathClassification = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'UBIGEO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { UBIGEO: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { UBIGEO: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ CLASIFICACION_DEF: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ CLASIFICACION_DEF: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}

const getUbigeo = async (res, param) => {

  const queryTwo = param.consultados.toUpperCase();
  const regexOne = new RegExp(param.termino.toUpperCase(), 'i');
  const regexTwo = new RegExp(param.terminodos.toUpperCase(), 'i');

  switch (queryTwo) {
    case 'PROVINCIA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { PROVINCIA: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { PROVINCIA: regexTwo }] })]);
      break
    case 'CLASIFICACION_DEF':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { CLASIFICACION_DEF: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { CLASIFICACION_DEF: regexTwo }] })]);
      break
    case 'FECHA_FALLECIMIENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { FECHA_FALLECIMIENTO: regexTwo }] })]);
      break
    case 'DEPARTAMENTO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { DEPARTAMENTO: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { DEPARTAMENTO: regexTwo }] })]);
      break
    case 'SEXO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { SEXO: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { SEXO: regexTwo }] })]);
      break
    case 'EDAD_DECLARADA':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { EDAD_DECLARADA: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { EDAD_DECLARADA: regexTwo }] })]);
      break
    case 'FECHA_CORTE':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { FECHA_CORTE: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { FECHA_CORTE: regexTwo }] })]);
      break
    case 'DISTRITO':
      getPeople = await Promise.all([
        People.countDocuments({ $and: [{ UBIGEO: regexOne }, { DISTRITO: regexTwo }], }),
        People.find({ $and: [{ UBIGEO: regexOne }, { DISTRITO: regexTwo }] })]);
      break
    default:
      return res.status(500).json({
        msg: "Verifica tu Consulta",
      });
  }

  const [count, personas] = getPeople;

  return res.json({
    count,
    personas
  });

}



module.exports = {
  getDepartamet,
  getProvince,
  getDistrict,
  getDateDeath,
  getDateCourt,
  getStateAge,
  getSex,
  getDeathClassification,
  getUbigeo
}