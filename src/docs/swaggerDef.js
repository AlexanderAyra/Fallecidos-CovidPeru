const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'Fallecidos por el Covid-19',
      description: `La enfermedad por coronavirus (COVID 19) es una enfermedad infecciosa provocada por el virus SARS-CoV-2. Segun el Ministerio de Salud estos son los muertos que tienen en el perio 2022`,
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