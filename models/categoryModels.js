const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

// Function to retrieve categories from the database
const getCategory = () => {
  return new Promise((resolve, reject) => {
      connectDb()
          .then(db => {
              const query = "SELECT * FROM category";
              return db.query(query);
          })
          .then(([rows]) => {
              resolve(rows);
          })
          .catch(error => {
              errorHandler(error);
              reject(error);
          });
  });
};

module.exports = { getCategory };
