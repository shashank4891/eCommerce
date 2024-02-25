const express = require("express");
const app = express();
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const { connectDb } = require('./config/dbConnection');
const categoryRouter = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

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

// Middleware for errorhandling
app.use(errorHandler);

app.use('/api', categoryRouter);
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
