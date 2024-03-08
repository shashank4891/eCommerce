const express = require('express');
const productListRouter = express.Router();
const productListControllers = require('../controllers/productListControllers');

/**
 * @swagger
 * /api/products/{product_id}:
 *   get:
 *     summary: To get all available products by particular ID.
 *     description: Available products by ID in eCommerce API
 *     parameters:
 *         - in: path
 *           name: product_id
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: integer
 *     responses:
 *         200:
 *            description: To test GET method for products by ID route
 *            Content-Type: application/json
*/
productListRouter.get('/products/:product_id', productListControllers.productList);

module.exports = productListRouter;