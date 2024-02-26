const express = require("express");
const orderRouter = express.Router();
const orderControllers = require("../controllers/orderControllers");
const tokenValidation = require("../middleware/tokenValidation");

// Route to place order history for authenticated users
orderRouter.post("/orders", tokenValidation, orderControllers.placeOrder);

// Route to fetch order history for authenticated users
orderRouter.get("/orders/history", tokenValidation, orderControllers.getOrderHistory);

module.exports = orderRouter;