const connection = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

function getCategory(db, callback) {
  const query = "SELECT categoryID, categoryName FROM category";
  db.query(query, (error, results) => {
    if (error) {
      errorHandler(error, null, null, callback);
      return;
    }
    console.log("Query results:", results);
    const categories = results.map((result) => result.categoryName);
    callback(null, results);
  });
}

module.exports = {
  getCategory,
};
