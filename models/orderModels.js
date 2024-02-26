const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

// Function to place an order
const placeOrder = async (order) => {
    try {
      const db = await connectDb();
      const query = `
        INSERT INTO orders (user_id, address, status)
        VALUES (?, ?, ?)
      `;
      const [result] = await db.query(query, [
        order.user_id,
        order.address,
        order.status,
      ]);
      return result.insertId;
    } catch (error) {
      errorHandler(error);
      throw new Error("Failed to place order");
    }
  };
  
  module.exports = { placeOrder };
