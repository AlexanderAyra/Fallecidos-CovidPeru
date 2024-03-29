const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../../docs/swaggerDef');


const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['src/routes/v1/*.js'],
});

router.use('/api/v1', swaggerUi.serve);
router.get(
  '/api/v1',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;

