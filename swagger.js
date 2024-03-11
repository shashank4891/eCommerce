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
      {
        url: "https://ecommerece-val3.onrender.com", 
        description: "Hosted Server",
      },
    ],
    tags: [
      { name: 'Home', description: 'Endpoint related to API homepage' },
      { name: 'Products', description: 'Endpoints related to product management' },
      { name: 'Users', description: 'Endpoints related to user management' },
      { name: 'Cart', description: 'Endpoints related to cart management' },
      { name: 'Orders', description: 'Endpoints related to order management' }
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
