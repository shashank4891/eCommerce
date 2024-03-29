const express = require("express");
const app = express();
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const { connectDb } = require('./config/dbConnection');
const categoryRouter = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const productListRoutes = require('./routes/productListRoutes');
const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const orderRouter = require('./routes/orderRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

// Load environment variables from .env file
dotenv.config();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connecting to Database
connectDb().then(() => {
  console.log('Server connected to MySQL database');
}).catch((error) => {
  console.error('Error connecting to MySQL database:', error);
});

// Set port based on environment variable or use a default value
const port = process.env.PORT || 8080;

// Route handler for the root URL
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome to the main page of API.
 *     description: E-Commerce API
 *     tags:
 *         - Home
 *     responses:
 *         200:
 *            description: To test GET method
*/
app.get('/', (req, res) => {
  res.send('Welcome to E-Commerce API');
});

// calling all Routes
app.use('/api', categoryRouter);
app.use('/api', productRoutes);
app.use('/api', productListRoutes);
app.use('/api', userRouter);
app.use('/api', cartRouter);
app.use('/api', orderRouter);

// Middleware for errorhandling
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
