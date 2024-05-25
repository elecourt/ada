// sequelize.js

const Sequelize = require('sequelize');

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize('ada_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
