const express = require("express");
const orderRouter = express.Router();
const orderControllers = require("../controllers/orderControllers");
const tokenValidation = require("../middleware/tokenValidation");

/**
 * components:
*   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: To order products from cart.
 *     description: order products from the logged in user's cart
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order placed successfully
 */

// Route to place order history for authenticated users
orderRouter.post("/orders", tokenValidation, orderControllers.placeOrder);

/**
 * @swagger
 * /api/orders/history:
 *   get:
 *     summary: To get order history.
 *     description: order history of the user
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: View placed order
 */

// Route to fetch order history for authenticated users
orderRouter.get("/orders/history", tokenValidation, orderControllers.getOrderHistory);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   get:
 *     summary: To get order history by order Id.
 *     description: fetch order history by order Id
 *     tags:
 *       - Orders
 *     parameters:
 *         - in: path
 *           name: orderId
 *           required: true
 *           description: Numeric ID required
 *           schema:
 *             type: integer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: View placed order by order Id
 */
// Route to get detailed information of a specific order by its ID
orderRouter.get("/orders/:orderId", tokenValidation, orderControllers.getOrderById);

module.exports = orderRouter;