const mongoose = require('mongoose');

const PersonasSchema = mongoose.Schema({

    TIPO_SEGURO: {
        type: String,
        required: [true, 'El TIPO SEGURO es obligatorio'],
    },
    SEXO: {
        type: String,
        required: [true, 'El Sexo es obligatorio'],
    },
    EDAD: {
        type: Number,
        required: [true, 'la EDAD es obligatorio'],
    },
    TIEMPO_EDAD: {
        type: Date,
        required: [true, 'El TIEMPO EDAD es obligatorio'],
    },
    ESTADO_CIVIL: {
        type: String,
        required: [true, 'El ESTADO CIVIL es obligatorio'],
    },
    NIVEL_DE_INSTRUCCIÓN: {
        type: String,
        required: [true, 'El NIVEL DE INSTRUCCIÓN es obligatorio'],
    },
    ETNIA: {
        type: String,
        required: [true, 'La ETNIA es obligatorio'],
    },
    PAIS_DOMICILIO: {
        type: String,
        required: [true, 'El PAIS DOMICILIO es obligatorio'],
    },
    DEPARTAMENTO_DOMICILIO: {
        type: String,
        required: [true, 'El DEPARTAMENTO DOMICILIO es obligatorio'],
    },
    PROVINCIA_DOMICILIO: {
        type: String,
        required: [true, 'El PROVINCIA DOMICILIO es obligatorio'],
    },
    DISTRITO_DOMICILIO: {
        type: String,
        required: [true, 'El DISTRITO DOMICILIO es obligatorio'],
    },
    FECHA: {
        type: Date,
        required: [true, 'La FECHA es obligatorio'],
    },
    TIPO_LUGAR: {
        type: String,
        required: [true, 'El TIPO LUGAR es obligatorio'],
    },
    INSTITUCION: {
        type: String,
        required: [true, 'La INSTITUCION es obligatorio'],
    },
    NECROPSIA: {
        type: String,
        required: [true, 'La NECROPSIA es obligatorio'],
    },
    DEBIDO_A_CAUSA_A: {
        type: String,
        required: [true, 'El DEBIDO A (CAUSA A) es obligatorio'],
    },
    DEBIDO_A_CAUSA_B: {
        type: String,
        required: [true, 'El DEBIDO A (CAUSA B) es obligatorio'],
    },
    DEBIDO_A_CAUSA_C: {
        type: String,
        required: [true, 'El DEBIDO A (CAUSA C) es obligatorio'],
    }
});

module.exports = mongoose.model('fallecidos', PersonasSchema);