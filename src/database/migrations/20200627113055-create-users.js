'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('users', {
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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');     
  }
};
