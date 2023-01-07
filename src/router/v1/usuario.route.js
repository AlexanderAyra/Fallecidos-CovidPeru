const { Router } = require("express");
const auth = require("../../middlewares/auth");
const validate = require('../../middlewares/validate')
const userValidation = require('../../validations/user.validation')

const userController = require("../../controller/user.controller");

const router = Router();

router
  .route('/')
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers)
  .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)

router
  .route('/:id')
  .get(auth('getUser'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .put(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
