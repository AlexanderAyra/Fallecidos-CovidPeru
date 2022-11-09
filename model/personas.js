const mongoose = require('mongoose');

const PersonasSchema = mongoose.Schema({
    FECHA_CORTE: {
        type: Date,
        // required: [true, 'La Decha de Corte es obligatorio'],
    },
    FECHA_FALLECIMIENTO: {
        type: Date,
        // required: [true, 'La Decha de Fallecimiento es obligatorio'],
    },
    EDAD_DECLARADA: {
        type: Number,
        // required: [true, 'La Edad Declarada es obligatorio'],
    },
    SEXO: {
        type: String,
        // required: [true, 'El Sexo es obligatorio'],
    },
    CLASIFICACION_DEF: {
        type: String,
        // required: [true, 'La Clasificacion de Defunciones es obligatorio'],
    },
    DEPARTAMENTO: {
        type: String,
        required: [true, 'El Departamento es obligatorio'],
    },
    PROVINCIA: {
        type: String,
        required: [true, 'La Provincia es obligatorio'],
    },
    DISTRITO: {
        type: String,
        required: [true, 'El Distrito es obligatorio'],
    },
    UBIGEO: {
        type: Number,
        // required: [true, 'El Ubigeo es obligatorio'],
    },
    UUID: {
        type: Number,
        // required: [true, 'El UUID es obligatorio'],
    }
});

module.exports = mongoose.model('fallecidos', PersonasSchema);