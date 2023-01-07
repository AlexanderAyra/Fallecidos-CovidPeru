const { Router } = require("express");
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation')
const peopleValidation = require('../../validations/people.validation')

const peopleController = require("../../controller/people.controller");

const router = Router();

router
  .route('/')
  .get(auth('getUsers'), validate(peopleValidation.getPeople), peopleController.getAll)
  .post(auth('manageUsers'), validate(peopleValidation.createPerson), peopleController.peoplePost)

router
  .route('/:consulta/:termino')
  .get(auth('getUsers'), validate(peopleValidation.getPeople), peopleController.getAll);

router
  .route('/:consulta/:termino/:consultados/:terminodos')
  .get(auth('getUsers'), validate(peopleValidation.getPeople), peopleController.getAll);

// router.get("/", buscarAll);
// router.get("/:consulta/:terminouno", buscarAll);
// router.get("/:consulta/:terminouno/:consultados/:terminodos", buscarAll);
// router.post("/", personasPost);

module.exports = router;
