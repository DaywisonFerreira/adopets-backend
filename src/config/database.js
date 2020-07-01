require('dotenv').config();
const { Client } = require('pg');

if(process.env.NODE_ENV === 'development') {
  module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  }
} else {
  module.exports = {
    dialect: 'postgres',
    connectionString: process.env.DATABASE_URL
  }
}
