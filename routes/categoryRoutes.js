const express = require('express');
const categoryRouter = express.Router();
const categoryControllers = require('../controllers/categoryControllers');

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: To get all available category.
 *     description: Available category in eCommerce API
 *     responses:
 *         200:
 *            description: To test GET method for category route
 *            Content-Type: application/json
*/
categoryRouter.get("/category", categoryControllers.getCategories);

module.exports = categoryRouter;