const orderModel = require("../models/orderModels");
const cartModel = require("../models/cartModels");
const errorHandler = require("../middleware/errorHandler");
const tokenValidation = require("../middleware/tokenValidation"); // Import tokenValidation middleware

// Controller function to handle order placement
exports.placeOrder = async (req, res, next) => {
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
