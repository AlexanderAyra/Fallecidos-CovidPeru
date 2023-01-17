const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'Covid-19',
      version: '1.0.1'
    }
  },
  apis: ['src/docs/*.yml', 'src/router/v1/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

// console.log(swaggerSpec);

const swaggerDocs = (app, port) => {
  app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api/v1/docs.js', (req, res) => {
    res.Header('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Version 1 del Docs');
}

module.exports = { swaggerDocs }