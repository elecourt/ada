const Sequelize = require('sequelize');
const sequelize = require('../sequelize.js');

const User = sequelize.define('users', {
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  firstname: Sequelize.STRING,
  business: Sequelize.STRING,
  address: Sequelize.STRING,
  mail: Sequelize.STRING,
  phone: Sequelize.STRING,
  package: {
    type: Sequelize.ENUM,
    values: ['mini', 'medium', 'full']
  },
  iban: Sequelize.STRING,
  siret: Sequelize.STRING,
  photo: Sequelize.STRING,
  password: Sequelize.STRING,
}, {
    tableName: 'users',
    timestamps: true
  });

module.exports = User;