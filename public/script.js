const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');

  expenseForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    try {
      const response = await fetch('http://localhost:3000/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, amount, date }),
      });

      const newExpense = await response.json();
      addExpenseToList(newExpense);
      expenseForm.reset();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  });

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('http://localhost:3000/api/expenses');
      const expenses = await response.json();
      expenses.forEach(addExpenseToList);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  });

  function addExpenseToList(expense) {
    const listItem = document.createElement('li');
    listItem.textContent = `Category: ${expense.category}, Amount: $${expense.amount}, Date: ${new Date(expense.expenseDate).toLocaleDateString()}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
      try {
        await fetch(`http://localhost:3000/api/expenses/${expense.id}`, {
          method: 'DELETE',
        });

        listItem.remove();
      } catch (error) {
        console.error('Error deleting expense:', error);
      }
    });

    listItem.appendChild(deleteButton);
    expenseList.appendChild(listItem);
  }