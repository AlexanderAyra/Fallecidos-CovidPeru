const {Router} = require("express");
const {check} = require("express-validator");
const authController = require("../../controller/auth.controller");
const {validarCampos} = require("../../middlewares/validar-Campos");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");

const router = Router();

router.post(
    "/login",
    [
        check("correo", "El correo es Obligatorio").isEmail(),
        check("contraseña", "La contraseña es Obligatoria").not().isEmpty(),
        validarCampos,
        validate(authValidation.login),
    ],
    authController.login
);

module.exports = router;
