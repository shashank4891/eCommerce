const express = require('express');
const cartRouter = express.Router();
const cartControllers = require('../controllers/cartControllers');
const tokenValidation = require('../middleware/tokenValidation');

cartRouter.use(tokenValidation);

/**
 * components:
*   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 */


/**
 * @swagger
 * /api/add-to-cart:
 *   post:
 *     summary: To add products to cart.
 *     description: Adding products into the logged in user's cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               qty:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product added successfully
 */
cartRouter.post('/add-to-cart', cartControllers.addToCart);

/**
 * @swagger
 * /api/view-cart:
 *   get:
 *     summary: To view products in cart.
 *     description: View products from logged in user's cart
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All items in the cart
 */
cartRouter.get('/view-cart', cartControllers.viewCart);

/**
 * @swagger
 * /api/update-cart/:{product_id}:
 *   put:
 *     summary: To update products in cart.
 *     description: Updating products into the logged in user's cart by product Id
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               qty:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart updated successfully
 */
cartRouter.put('/update-cart/:product_id', cartControllers.updateCart);

/**
 * @swagger
 * /api/remove-from-cart/:{product_id}:
 *   delete:
 *     summary: To delete product from cart.
 *     description: Deleting products from the logged in user's cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product removed from cart successfully
 */
cartRouter.delete('/remove-from-cart/:product_id', cartControllers.removeFromCart);

module.exports = cartRouter;