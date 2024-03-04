const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

async function getProductsByCategory(categoryID) {
  try {
    const db = await connectDb();
    const query = "SELECT * FROM productsbycategory WHERE categoryID = ?";
    const [results] = await db.query(query, [categoryID]);
    return results;
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to get products by category");
  }
}

module.exports = { getProductsByCategory };

