const Persona = require('../model/personas');


const twoParams = async (res, param) => {

    const termino = Object.entries(param)[1][1];
    // console.log(termino);

    const regex = new RegExp(termino, 'i');

    const personaOne = await Persona.find({
        $or: [{ DEPARTAMENTO: regex }, { DISTRITO: regex }]
    })


    return res.json({
        personaOne
    })
}

module.exports = {
    twoParams
}