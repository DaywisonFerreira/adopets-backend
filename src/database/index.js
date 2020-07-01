import Sequelize from 'sequelize';
require('dotenv').config();
import User from '../app/models/User';
import Product from '../app/models/Product';

const env = process.env.NODE_ENV || 'development';
const connection = require('../config/config.json')[env]

console.log('A conexao é ' + connection)

const models = [User, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(connection);

    models.map(model => model.init(this.connection))
  }
}

export default new Database();