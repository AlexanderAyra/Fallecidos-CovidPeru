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


/**
 * @openapi
 * /api/personas:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [TODOS LOS FALLECIDOS]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */


/**
 * @swagger
 * /api/personas/Departamento/{name}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Departamento
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/Provincia/{name}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la Provincia
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/Distrito/{name}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Distrito
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/Sexo/{sexo}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sexo
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Sexo
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/CLASIFICACION_DEF/{name}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la Clasificacion de Defuncion
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/edad_declarada/{edad}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: edad
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la Edad
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/FECHA_FALLECIMIENTO/{fecha}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [SPECIFY DECEASED]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: fecha
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la Fecha de Fallecimiento
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/People'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /api/personas/Departamento/{departamento}/DISTRITO/{distrito}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por DEPARTAMENTO Y EL DISTRITO]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: departamento
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el  Departamento
 *       - in: path
 *         name: distrito
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Distrito
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /api/personas/Departamento/{departamento}/PROVINCIA/{provincia}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por DEPARTAMENTO Y LA PROVINCIA]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: departamento
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el  Departamento
 *       - in: path
 *         name: provincia
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la Provincia
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /api/personas/Departamento/{departamento}/SEXO/{sexo}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por DEPARTAMENTO Y EL SEXO]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: departamento
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el  Departamento
 *       - in: path
 *         name: sexo
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Sexo
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */


/**
 * @swagger
 * /api/personas/DISTRITO/{distrito}/SEXO/{sexo}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por el DISTRITO Y EL SEXO]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: distrito
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el  distrito
 *       - in: path
 *         name: sexo
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el Sexo
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */



/**
 * @swagger
 * /api/personas/DISTRITO/{distrito}/EDAD_DECLARADA/{edad}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por el DISTRITO Y EL EDAD]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: distrito
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese el  distrito
 *       - in: path
 *         name: edad
 *         required: true
 *         schema:
 *           type: string
 *         description: Ingrese la edad
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

module.exports = router;
