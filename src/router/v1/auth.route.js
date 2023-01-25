const { Router } = require("express");
const authController = require("../../controller/auth.controller");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");

const router = Router();

router.post('/login', validate(authValidation.login), authController.login)

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Ingrese sus datos
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: usuario001@gmail.com
 *               password: 123456aa
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 tokens:
 *                   $ref: '#/components/schemas/AuthTokens'
 *       "401":
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Invalid email or password
 */

module.exports = router;
