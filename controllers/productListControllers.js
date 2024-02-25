const productListModels = require("../models/productListModels");

exports.productList = (req, res, next) => {
  const product_id = req.params.product_id;
  productListModels.productList(product_id, (error, products) => {
    if (error) {
      // Handle error
      return next(error);
    }
    res.json(products);
  });
};
