const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/userControllers');

userRouter.post('/register', usersController.register);
userRouter.post('/login', usersController.login);


module.exports = userRouter;