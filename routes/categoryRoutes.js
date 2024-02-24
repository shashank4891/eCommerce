const express = require('express');
const categoryRouter = express.Router();
const categoryControllers = require('../controllers/categoryControllers');

categoryRouter.use(categoryControllers);

module.exports = categoryRouter;