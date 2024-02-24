const mysql = require('mysql2');

const connectDb = () => {
    const db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      timezone: '+05:30', // Indian Standard Time (IST) offset
      dateStrings: true,
    });
  
    // Establish MySQL connection
    db.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
      }
      console.log('Connected to MySQL database');
    });
  
    // Handle MySQL connection errors
    db.on('error', (err) => {
      console.error('MySQL connection error: ', err);
    });
  
    return db;
  };

module.exports = connectDb;
