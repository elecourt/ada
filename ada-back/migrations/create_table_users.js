'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      business: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      package: {
        type: Sequelize.STRING
      },
      iban: {
        type: Sequelize.STRING
      },
      siret: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
