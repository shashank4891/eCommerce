const express = require("express");
const app = express();
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Set port based on environment variable or use a default value
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
