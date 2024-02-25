const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

function productList(product_id, callback) {
  const query = "SELECT * FROM productsbycategory WHERE product_id = ?";
  connectDb()
    .then((db) => {
      db.query(query, [product_id], (error, results) => {
        if (error) {
          errorHandler(error, null, null, callback);
          return;
        }
        callback(null, results);
      });
    })
    .catch((error) => {
      console.error("Error connecting to database:", error);
      errorHandler(error, null, null, callback);
    });
}

module.exports = {
  productList,
};
