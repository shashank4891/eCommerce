// const productListModels = require("../models/productListModels");

// exports.productList = (req, res, next) => {
//   const product_id = req.params.product_id;
//   productListModels.productList(product_id, (error, products) => {
//     if (error) {
//       // Handle error
//       return next(error);
//     }
//     res.json(products);
//   });
// };

const productListModels = require("../models/productListModels");
const errorHandler = require("../middleware/errorHandler");

const productList = async (req, res, next) => {
  try {
      const { product_id } = req.params;
     
      const products = await productListModels.productList(product_id);

      res.status(200).json(products);
  } catch (error) {
      errorHandler(error, req, res, next);
  }
};

module.exports = { productList };
