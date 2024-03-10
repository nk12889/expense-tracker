const expense = require('../model/expense');

const createExpense = async (req, res) => {
    try {
      const {  category, amount, date } = req.body;
      const newExpense = await expense.create({  category, amount, expenseDate: date });
      res.status(201).json(newExpense);
    } catch (error) {
      console.error('Error creating expense:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getExpenses = async (req, res) => {
    try {
      const expenses = await expenses.findAll();
      res.json(expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteExpense = async (req, res) => {
    try {
      await expense.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting expense:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    createExpense,
    getExpenses,
    deleteExpense,
  };