'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('products', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('products');     
  }
};
