const {request, response} = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../model/usuarios");
const {generarToken} = require("../helpers/generar-jwt");

const login = async (req = request, res = response) => {
    console.log(req.body);
    const {correo, contraseña, token} = req.body;

    try {
        const usuario = await Usuario.findOne({correo});
        console.log(usuario);

        if (!usuario) {
            return res.status.json({
                msg: "Usuario / Contraseña no son correctos - correo",
            });
        }

        // Verificar la contraseña
        const validarContraseña = bcryptjs.compareSync(
            contraseña,
            usuario.contraseña
        );

        if (!validarContraseña) {
            return res.status(400).json({
                msg: "Usuario / Contraseña no son correctos - contraseña",
            });
        }

        const token = await generarToken(usuario.id);

        res.json({
            usuario,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

module.exports = {
    login,
};
