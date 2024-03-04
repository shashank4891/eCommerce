// const { connectDb } = require("../config/dbConnection");
// const errorHandler = require("../middleware/errorHandler");

// function productList(product_id, callback) {
//   const query = "SELECT * FROM productsbycategory WHERE product_id = ?";
//   connectDb()
//     .then((db) => {
//       db.query(query, [product_id], (error, results) => {
//         if (error) {
//           errorHandler(error, null, null, callback);
//           return;
//         }
//         callback(null, results);
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to database:", error);
//       errorHandler(error, null, null, callback);
//     });
// }

// module.exports = { productList };

const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

async function productList(product_id) {
  try {
    const db = await connectDb();
    const query = "SELECT * FROM productsbycategory WHERE product_id = ?";
    const [results] = await db.query(query, [product_id]);
    return results;
  } catch (error) {
    errorHandler(error);
    throw new Error("Failed to get products by category");
  }
}

module.exports = { productList };