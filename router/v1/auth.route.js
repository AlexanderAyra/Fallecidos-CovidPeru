const {Router} = require("express");
const {check} = require("express-validator");
const {login} = require("../../controller/auth");
const {validarCampos} = require("../../middlewares/validar-Campos");

const router = Router();

router.post(
    "/login",
    [
        check("correo", "El correo es Obligatorio").isEmail(),
        check("contraseña", "La contraseña es Obligatoria").not().isEmpty(),
        validarCampos,
    ],
    login
);

module.exports = router;
