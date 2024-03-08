const jwt = require("jsonwebtoken");

const tokenValidation = (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Check if the user ID exists in the decoded token
    if (!decodedToken.userId) {
      // Change 'id' to 'userId'
      throw new Error("User ID not found in token payload");
    }

    // Add the decoded user data to the request object
    req.userData = { userId: decodedToken.userId };

    // Move to the next middleware
    next();
  } catch (error) {
    // If token is not present or invalid, send an error response
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = tokenValidation;
