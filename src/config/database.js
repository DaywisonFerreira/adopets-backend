require('dotenv').config();
const { Client } = require('pg');

if(process.env.NODE_ENV === 'development') {
  console.log('ambiente de desolvimento')
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
  console.log('ambiente de producao')
  module.exports = {
    dialect: 'postgres',
    connectionString: process.env.DATABASE_URL,
  }
}
