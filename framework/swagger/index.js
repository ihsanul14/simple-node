import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

export const SwaggerUi = swaggerUi
export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
    },
  },
  apis: ['./router/*.ts'], // Path to your route files
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
