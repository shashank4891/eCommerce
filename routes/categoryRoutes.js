const express = require('express');
const categoryRouter = express.Router();
const categoryControllers = require('../controllers/categoryControllers');

categoryRouter.get("/category", categoryControllers.getCategories);

module.exports = categoryRouter;