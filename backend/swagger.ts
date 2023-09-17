const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        title: 'Project X Backend',
    },
    host: 'localhost:3000',
    schemes: process.argv.includes('prod') ? ['https'] : ['http'],
    openapi: '3.0.0',
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['app.ts', 'router/*'];

swaggerAutogen(outputFile, endpointsFiles, doc);
