const Sequelize = require('sequelize');
const sequelize = require('../util/database');


const Expense = sequelize.define('expense', {
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    expenseDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, 
      }
});

module.exports= Expense;
