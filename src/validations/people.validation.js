const Joi = require('joi');

const createPerson = {
  body: Joi.object().keys({
    FECHA_CORTE: Joi.date().required(),
    FECHA_FALLECIMIENTO: Joi.date().required(),
    EDAD_DECLARADA: Joi.number().required().integer(),
    SEXO: Joi.string().required(),
    CLASIFICACION_DEF: Joi.string().required(),
    DEPARTAMENTO: Joi.string().required(),
    PROVINCIA: Joi.string().required(),
    DISTRITO: Joi.string().required(),
    UBIGEO: Joi.number().required().integer(),
    UUID: Joi.number().required().integer(),
  }),
};

const getPeople = {
  query: Joi.object().keys({
    consulta: Joi.string(),
    termino: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};



module.exports = {
  createPerson,
  getPeople
};