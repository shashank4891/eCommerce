const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/userControllers');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: To register new user.
 *     description: Registering a new user in eCommerce API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registered Successfully
 */
userRouter.post('/register', usersController.register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: To Login a user.
 *     description: Logging a user in eCommerce API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged in Successfully
 */
userRouter.post('/login', usersController.login);


module.exports = userRouter;