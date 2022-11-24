const {request, response} = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../model/usuarios");

const usuariosGet = async (req = request, res = response) => {
    // const {desde, limite} = req.query;

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find(),
    ]);
    // const usuarioOne = await Usuario.find();

    res.json({
        total,
        usuarios,
    });
};

const usuarioPost = async (req = request, res = response) => {
    const {nombres, apellidos, edad, correo, contraseña, rol} = req.body;

    const usuario = new Usuario({
        nombres,
        apellidos,
        edad,
        correo,
        contraseña,
        rol,
    });

    const salt = bcryptjs.genSaltSync(10);
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

    await usuario.save();

    return res.json({
        usuario,
    });
};

const usuarioPut = async (req = request, res = response) => {
    const {id} = req.params;
    const {_id, nombres, apellidos, contraseña, ...resto} = req.body;

    if (contraseña) {
        const salt = bcryptjs.genSaltSync(10);
        resto.contraseña = bcryptjs.hashSync(contraseña, salt);
        resto.nombres = nombres;
        resto.apellidos = apellidos;
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario,
    });
};

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioPut,
};
