const Usuario = require("../model/usuarios");
const Rol = require("../model/role");

const emailExiste = async (correo = "") => {
    console.log(correo);
    const existeEmail = await Usuario.findOne({correo});

    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
};

const esRoleValido = async (rol = "") => {
    const existeRol = await Rol.findOne({rol});
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
