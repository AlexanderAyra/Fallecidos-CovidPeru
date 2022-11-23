const { Router } = require('express');
const { check } = require('express-validator');

const { emailExiste, esRoleValido, existeUsuarioPorId, } = require('../helpers/validaciones-db')

const { usuarioPost, usuarioPut, usuariosGet } = require('../controller/usuario');
const { validarCampos } = require('../middlewares/validar-Campos');

const router = Router();

router.get('/', usuariosGet)

router.post('/', [
    check('nombres', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
    check('edad', 'La edad es Obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRoleValido),
    validarCampos
], usuarioPost);

router.put('/:id', [
    check('id', 'No es un ID Valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos,
], usuarioPut)


module.exports = router;