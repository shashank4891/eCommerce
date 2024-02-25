const express = require('express');
const productRouter = express.Router();
const productControllers = require('../controllers/productControllers');

productRouter.get('/category/:categoryID', productControllers.getProductsByCategory);

module.exports = productRouter;