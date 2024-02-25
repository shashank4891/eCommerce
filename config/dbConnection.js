const mysql = require("mysql2/promise");
const errorHandler = require("../middleware/errorHandler");

const connectDb = async () => {
  try {
    const db = await mysql.createPool({ // Use await to create the connection pool
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      timezone: "+05:30", // Indian Standard Time (IST) offset
      dateStrings: true,
    });

    return db;
  } catch (error) {
    // Reject the promise if there's an error
    console.error("Error connecting to MySQL: ", error);
    throw error;
  }
};

const initDb = async function (dbName = "ecommerce") {
  try {
    const dbConnection = await connectDb();
    // Now you have the connected database instance, you can do whatever you want with it
    // For example, you can assign it to your 'resp' object
    resp[dbName] = dbConnection;
  } catch (error) {
    console.error("Error initializing database: ", error);
  }
};

module.exports = { connectDb, initDb };
