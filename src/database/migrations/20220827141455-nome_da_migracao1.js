'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('pokemons', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
       },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
       },
      peso: {
          type: Sequelize.DECIMAL,
      },
      tipo: {
          type: Sequelize.STRING,
          allowNull: false
      }
      }
    );
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('pokemons');

  }
};
