const categoryModels = require("../models/categoryModels");
const errorHandler = require("../middleware/errorHandler");

const getCategories = async (req, res, next) => {
  try {
      const categories = await categoryModels.getCategory();
      res.status(200).json(categories);
  } catch (error) {
      errorHandler(error, req, res, next);
  }
};

// Export the getCategories function using module.exports
module.exports = { getCategories };
