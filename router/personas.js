const express = require('express');
const router = express.Router();

const { buscarAll, personasPost } = require('../controller/personas')

router.get('/', buscarAll)
router.get('/:consulta/:terminouno', buscarAll)
router.get('/:consulta/:terminouno/:consultados/:terminodos', buscarAll)
router.get('/:consulta/:terminouno/:consultados/:terminodos/:consultatres/:terminotres', buscarAll)
router.get('/:consultauno/:terminouno/:consultados/:terminodos/:consultatres/:terminotres/:consultacuatro/:terminocuatro', buscarAll)



// router.get('/fallecimiento/:terminofall/edad/:terminoedad', personasGetOne)
// router.get('/departamento/:terminodep/sexo/:terminosexo', personasGetOne)
// router.get('/provincia/:terminoprov/fallecimiento/:terminofall', personasGetOne)
// router.get('/distrito/:terminodis/fallecido/:terminofall', personasGetOne)
// router.get('/departamento/:terminodep/fallecido/:terminofall/', personasGetOne)
// router.get('/departamento/:terminodep/fallecido/:terminofall/', personasGetOne)
// router.get('/departamento/:terminodep/fallecido/:terminofall/edad/:terminoedad', personasGetOne)
// router.get('/departamento/:terminodep/fallecido/:terminofall/edad/:terminoedad', personasGetOne)
router.post('/', personasPost);






module.exports = router;