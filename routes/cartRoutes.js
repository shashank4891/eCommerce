const express = require('express');
const cartRouter = express.Router();
const cartControllers = require('../controllers/cartControllers');
const tokenValidation = require('../middleware/tokenValidation');

cartRouter.use(tokenValidation);

cartRouter.post('/add-to-cart', cartControllers.addToCart);
cartRouter.get('/view-cart', cartControllers.viewCart);
cartRouter.put('/update-cart/:product_id', cartControllers.updateCart);
cartRouter.delete('/remove-from-cart/:product_id', cartControllers.removeFromCart);

module.exports = cartRouter;