const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

function getProductsByCategory(categoryID, callback) {
  const query = "SELECT * FROM productsbycategory WHERE categoryID = ?";
  connectDb()
    .then((db) => {
      db.query(query, [categoryID], (error, results) => {
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
  getProductsByCategory,
};
