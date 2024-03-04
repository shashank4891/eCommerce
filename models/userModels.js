const { connectDb } = require("../config/dbConnection");
const errorHandler = require("../middleware/errorHandler");

async function createUser({ email, password, first_name, last_name }) {
  try {
    const db = await connectDb(); // Connect to the database
    const [result] = await db.query(
      "INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)",
      [email, password, first_name, last_name]
    );
    await db.end(); // Close the database connection
    return result.insertId; // Return the newly inserted user ID
  } catch (error) {
    errorHandler(error);
    throw error;
  }
}

async function findUserByEmail(email) {
  try {
    const db = await connectDb(); // Connect to the database
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    await db.end(); // Close the database connection
    return rows[0]; // Return the first matching user or null
  } catch (error) {
    errorHandler(error);
    throw error;
  }
}

module.exports = { createUser, findUserByEmail };
