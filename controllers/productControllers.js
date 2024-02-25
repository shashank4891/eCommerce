const productModels = require("../models/productModels");

exports.getProductsByCategory = (req, res, next) => {
  const categoryID = req.params.categoryID;
  productModels.getProductsByCategory(categoryID, (error, products) => {
    if (error) {
      // Handle error
      return next(error);
    }
    res.json(products);
  });
};
