const express = require('express');
const productListRouter = express.Router();
const productListControllers = require('../controllers/productListControllers');

productListRouter.get('/products/:product_id', productListControllers.productList);

module.exports = productListRouter;