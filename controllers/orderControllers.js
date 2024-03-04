const orderModel = require("../models/orderModels");
const cartModel = require("../models/cartModels");
const errorHandler = require("../middleware/errorHandler");
const tokenValidation = require("../middleware/tokenValidation"); // Import tokenValidation middleware

// Controller function to handle order placement
const placeOrder = async (req, res, next) => {
  try {
    // Validate user token
    tokenValidation(req, res, async () => {
      const { userId } = req.userData;
      const { address } = req.body;

      // Validate address
      if (!address) {
        return res.status(400).json({ message: "Address is required" });
      }

      // Check if the cart is empty
      const cartContents = await cartModel.getCartContents(userId);
      if (!cartContents.length) {
        return res.status(400).json({ message: "Cart is empty" });
      }

      // Place the order
      const order = {
        user_id: userId,
        address,
        status: "progress", // Initial status of the order
      };

      // Call placeOrder function from orderModel
      const orderId = await orderModel.placeOrder(order);

      // Clear the cart after placing the order
      await cartModel.clearCart(userId);

      res.status(201).json({ message: "Order placed successfully", orderId });
    });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Controller function to fetch order history for authenticated users
const getOrderHistory = async (req, res, next) => {
  try {
    // Validate user token
    tokenValidation(req, res, async () => {
      const { userId } = req.userData;

      // Retrieve order history from the database
      const orderHistory = await orderModel.getOrderHistory(userId);

      // Send the order history as a response
      res.status(200).json(orderHistory);
    });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Controller function to get detailed information of a specific order by its ID
const getOrderById = async (req, res, next) => {
    try {
        // Validate user token
        tokenValidation(req, res, async () => {
            const orderId = req.params.orderId; // Extract order ID from request parameters
            const order = await orderModel.getOrderById(orderId); // Call getOrderById function from orderModel
            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }
            res.status(200).json(order);
        });
    } catch (error) {
        errorHandler(error, req, res, next);
    }
};

module.exports = {
  placeOrder,
  getOrderHistory,
  getOrderById
};