const { Router } = require("express");
const authController = require("../../controller/auth.controller");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");

const router = Router();

router.post('/login', validate(authValidation.login), authController.login)

module.exports = router;
