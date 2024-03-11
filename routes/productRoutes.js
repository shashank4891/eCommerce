const express = require('express');
const productRouter = express.Router();
const productControllers = require('../controllers/productControllers');

/**
 * @swagger
 * /api/category/{categoryID}:
 *   get:
 *     summary: To get all available category by particular category ID.
 *     description: Available category by ID in eCommerce API
 *     tags:
 *       - Products
 *     parameters:
 *         - in: path
 *           name: categoryID
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: integer
 *     responses:
 *         200:
 *            description: To test GET method for category by ID route
 *            Content-Type: application/json
*/
productRouter.get('/category/:categoryID', productControllers.getProductsByCategory);

module.exports = productRouter;