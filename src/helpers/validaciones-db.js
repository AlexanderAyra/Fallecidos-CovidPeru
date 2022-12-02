const Usuario = require("../model/user.model");
const Rol = require("../model/role");

const emailExiste = async (email = "") => {
    const existeEmail = await Usuario.findOne({ email });

    if (existeEmail) {
        throw new Error(`El email: ${email}, ya esta registrado`);
    }
};

const esRoleValido = async (rol = "") => {
    const existeRol = await Rol.findOne({ rol });
    if (!existeRol) {
        throw new Error(
            `El Rol: ${rol}, no esta registrado en la Base de Datos`
        );
    }
};

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El usuario con ID: ${id} no Existe`);
    }
};

module.exports = {
    emailExiste,
    esRoleValido,
    existeUsuarioPorId,
};
