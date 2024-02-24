const express = require("express");
const app = express();
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

// Load environment variables from .env file
dotenv.config();

// Connecting to Database
connectDb();

// Set port based on environment variable or use a default value
const port = process.env.PORT || 8080;

// Middleware for errorhandling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
