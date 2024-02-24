const express = require("express");
const categoryRouter = express.Router();
const categoryModels = require("../models/categoryModels");
const errorHandler = require("../middleware/errorHandler");
const { connectDb } = require("../config/dbConnection");

categoryRouter.get("/category", async (req, res, next) => {
    try {
      const db = await connectDb(); // Initialize database connection
      categoryModels.getCategory(db, (error, categories) => {
        if (error) {
          // Pass the error to the errorHandler middleware
          errorHandler(error, req, res, next);
          return;
        }
        res.json(categories);
      });
    } catch (error) {
      // Handle connection error
      errorHandler(error, req, res, next);
    }
  });

module.exports = categoryRouter;
