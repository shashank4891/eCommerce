const mysql = require("mysql2");
const errorHandler = require("../middleware/errorHandler");

const connectDb = async () => {
  return new Promise((resolve, reject) => {
    const db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      timezone: "+05:30", // Indian Standard Time (IST) offset
      dateStrings: true,
    });

    // Handle MySQL connection errors
    db.on("error", (err) => {
      console.error("MySQL connection error: ", err);
      errorHandler(err);
    });

    // Resolve the promise with the connected database instance
    resolve(db);
  });
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
