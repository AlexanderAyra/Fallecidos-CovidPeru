const User = require("../model/usuarios");

const getUserByEmail = async (correo) => {
    return User.findOne({correo});
};

module.exports = {
    getUserByEmail,
};
