const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-data', 'root', '705043', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
