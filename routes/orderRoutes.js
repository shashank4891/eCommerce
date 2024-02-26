const express = require("express");
const orderRouter = express.Router();
const orderControllers = require("../controllers/orderControllers");
const tokenValidation = require("../middleware/tokenValidation");

orderRouter.post("/orders", tokenValidation, orderControllers.placeOrder);

module.exports = orderRouter;