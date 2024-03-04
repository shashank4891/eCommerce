const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

// Function to add an item to the cart
const addToCart = async (user_id, product_id, qty) => {
  try {
    const db = await connectDb();
    const query = `
      INSERT INTO cart (user_id, product_id, qty)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.query(query, [user_id, product_id, qty]);
    return result.insertId; // Return the ID of the newly added item
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to add item to cart");
  }
};

// Function to retrieve the contents of the cart for a specific user
const getCartContents = async (userId) => {
  try {
    const db = await connectDb();
    const query = `
      SELECT * FROM cart
      WHERE user_id = ?
    `;
    const [rows] = await db.query(query, [userId]);
    return rows; // Return the cart contents
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to retrieve cart contents");
  }
};

// Function to update the quantity of an item in the cart
const updateCartItemQuantity = async (cart_id, qty) => {
  try {
    const db = await connectDb();
    const query = `
      UPDATE cart
      SET qty = ?
      WHERE cart_id = ?
    `;
    await db.query(query, [qty, cart_id]);
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to update cart item quantity");
  }
};

// Function to remove an item from the cart
const removeCartItem = async (cart_id) => {
  try {
    const db = await connectDb();
    const query = `
      DELETE FROM cart
      WHERE cart_id = ?
    `;
    await db.query(query, [cart_id]);
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to remove item from cart");
  }
};

// Function to clear the cart for a specific user
const clearCart = async (userId) => {
  try {
    const db = await connectDb();
    const query = `
      DELETE FROM cart
      WHERE user_id = ?
    `;
    await db.query(query, [userId]);
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to clear cart");
  }
};

// Export all functions
module.exports = {
  addToCart,
  getCartContents,
  updateCartItemQuantity,
  removeCartItem,
  clearCart,
};