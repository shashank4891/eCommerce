const connection = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

function getCategory(db, callback) {
  const query = "SELECT DISTINCT categoryName FROM category";
  db.query(query, (error, results) => {
    if (error) {
      errorHandler(error, null, null, callback);
      return;
    }
    const categories = results.map((result) => result.categoryName);
    callback(null, categories);
  });
}

module.exports = {
  getCategory,
};
