const { Router } = require("express");
const { check } = require("express-validator");
const auth = require("../../middlewares/auth");
const validate = require('../../middlewares/validate')
const userValidation = require('../../validations/user.validation')

const { emailExiste, esRoleValido, existeUsuarioPorId, } = require("../../helpers/validaciones-db");
const authController = require("../../controller/user.controller");
const { validarCampos } = require("../../middlewares/validar-Campos");

const router = Router();

router
  .route('/')
  .get(auth('getUsers'), validate(userValidation.getUser), authController.getUsers)
  .post([
    check("name", "El name es obligatorio").not().isEmpty(),
    check("lastName", "El lastName es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("email").custom(emailExiste),
    validarCampos,
    // auth('manageUsers')
  ], authController.createUser)

router
  .route('/:id')
  .put([
    check("id", "No es un ID Valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos,
  ], authController.usuarioPut)

module.exports = router;
