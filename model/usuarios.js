const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsuariosSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: [true, "Es Obligatorio el nombre de Usuario"],
    },
    apellidos: {
        type: String,
        required: [true, "Es Obligatorio el apellido del Usuario"],
    },
    edad: {
        type: Number,
        required: [true, "Es Obligatorio la Edad"],
    },
    correo: {
        type: String,
        required: [true, "Es Obligatorio el correo del Usuario"],
    },
    contraseña: {
        type: String,
        required: [true, "Es Obligatorio la contraseña del Usuario"],
    },
    rol: {
        type: String,
        required: true,
        default: "USER_ROLE",
        enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    img: {
        type: String,
    },
});

UsuariosSchema.methods.toJSON = function () {
    const {__v, contraseña, _id, ...usuario} = this.toObject();
    return usuario;
};

UsuariosSchema.methods.isPasswordMatch = async function (contraseña) {
    const user = this;
    return bcrypt.compare(contraseña, user.contraseña);
};

module.exports = mongoose.model("Usuarios", UsuariosSchema);
