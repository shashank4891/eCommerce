const authService = require("../middleware/authService");
const errorHandler = require("../middleware/errorHandler");

const register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.json({ token });
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

module.exports = { register, login };
