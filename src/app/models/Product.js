import Sequelize, {Model} from 'sequelize';

class Products extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      category: Sequelize.STRING,
      price: Sequelize.DECIMAL(10,2),
      stock: Sequelize.INTEGER,
    }, {
      sequelize, modelName: 'products'
      }
    );

    return this;

  }
  
}

export default Products;