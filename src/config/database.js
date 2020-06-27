module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'adopets',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true
  }
}