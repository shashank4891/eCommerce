const productModels = require("../models/productModels");
const errorHandler = require("../middleware/errorHandler"); 

const getProductsByCategory = async (req, res, next) => {
  const categoryID = req.params.categoryID;
  try {
    const products = await productModels.getProductsByCategory(categoryID);
    res.json(products);
  } catch (error) {
    errorHandler(error, req, res, next); 
  }
};

module.exports = { getProductsByCategory };
