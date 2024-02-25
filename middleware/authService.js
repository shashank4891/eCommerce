const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModels');

exports.register = async ({ email, password, first_name, last_name }) => {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create the user in the database
    const userId = await UserModel.createUser({ email, password: hashedPassword, first_name, last_name });
    
    return { message: "User registered successfully", userId};
};

exports.login = async ({ email, password }) => {
    // Find the user by email in the database
    const user = await UserModel.findUserByEmail(email);
    
    // If the user doesn't exist, throw an error
    if (!user) {
        throw new Error('User not found');
    }
    
    // Compare the provided password with the hashed password stored in the database
    const validPassword = await bcrypt.compare(password, user.password);
    
    // If the password is invalid, throw an error
    if (!validPassword) {
        throw new Error('Invalid password');
    }
    
    // Generate a JWT token with the user ID as payload
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '30m' });

    // Calculate the token expiration time
    const expirationTime = new Date(Date.now() + 30 * 60 * 1000);
    
    return { message: "User logged in successfully", token, expirationTime };
};
