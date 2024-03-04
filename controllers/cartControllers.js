const cartModel = require("../models/cartModels");
const errorHandler = require("../middleware/errorHandler");

// Controller function to add an item to the cart
const addToCart = async (req, res, next) => {
  try {
    const { user_id, product_id, qty } = req.body;
    const cartItemId = await cartModel.addToCart(user_id, product_id, qty);
    res.status(201).json({ message: "Item added to cart", cartItemId });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Controller function to retrieve the contents of the cart for a specific user
const viewCart = async (req, res, next) => {
  try {
    const userId = req.userData.userId; // Access userId from req.userData
    const cartContents = await cartModel.getCartContents(userId);
    res.status(200).json(cartContents);
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Controller function to update the quantity of an item in the cart
const updateCart = async (req, res, next) => {
  try {
    const cart_id = req.params.productId; // Assuming the cart item ID is passed as a URL parameter
    const { qty } = req.body;
    await cartModel.updateCartItemQuantity(cart_id, qty);
    res
      .status(200)
      .json({ message: "Cart item quantity updated successfully" });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Controller function to remove an item from the cart
const removeFromCart = async (req, res, next) => {
  try {
    const cart_id = req.params.productId; // Assuming the cart item ID is passed as a URL parameter
    await cartModel.removeCartItem(cart_id);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

// Export all functions
module.exports = {
  addToCart,
  viewCart,
  updateCart,
  removeFromCart,
};