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
 *     tags: [Fallecidos por Covid]
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
 * 
*   post:
 *     summary: Create a People
 *     description: Only admins can create other users.
 *     tags: [Fallecidos por Covid]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - FECHA_CORTE
 *               - FECHA_FALLECIMIENTO
 *               - EDAD_DECLARADA
 *               - SEXO
 *               - CLASIFICACION_DEF
 *               - DEPARTAMENTO
 *               - PROVINCIA
 *               - DISTRITO
 *               - UBIGEO
 *               - UUID
 *             properties:
 *               FECHA_CORTE:
 *                 type: string
 *               FECHA_FALLECIMIENTO:
 *                 type: string
 *               EDAD_DECLARADA:
 *                 type: string
 *               SEXO:
 *                 type: string
 *               CLASIFICACION_DEF:
 *                 type: string
 *               DEPARTAMENTO:
 *                 type: string
 *               PROVINCIA:
 *                 type: string
 *               DISTRITO:
 *                 type: string
 *               UBIGEO:
 *                 type: string
 *               UUID:
 *                  type: string
 *             example:
 *               FECHA_CORTE: 2002-10-01
 *               FECHA_FALLECIMIENTO: 2002-10-01
 *               EDAD_DECLARADA: 25
 *               SEXO: masculino
 *               CLASIFICACION_DEF: Criterio SINADEF
 *               DEPARTAMENTO: Lima
 *               PROVINCIA: Lima
 *               DISTRITO: ate
 *               UBIGEO: 150108
 *               UUID: 13890096
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /api/personas/{consulta}/{termino}:
 *   get:
 *     summary: Get People
 *     description: Lista de todos los Fallecidos por covid por 2 Parametros
 *     tags: [Fallecidos por Covid]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
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
 * /api/personas/{consulta}/{termino}/{consultados}/{terminodos}:
 *   get:
 *     summary: Get People
 *     description: Lista de Todos los Fallecidos por Covid por 4 parametros
 *     tags: [Fallecidos por Covid]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
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
