const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "API documentation for the E-Commerce application",
    },
    servers: [
      {
        url: "http://localhost:8080", 
        description: "Local Development Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer"
        },
      }
    }
  },
  apis: ['./index.js', './routes/categoryRoutes.js', './routes/productRoutes.js', './routes/productListRoutes.js', './routes/userRoutes.js', './routes/cartRoutes.js', './routes/orderRoutes.js'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
