const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json());
const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expenses');


// Use expense routes
app.use('/api', expenseRoutes);


// Sync the model with the database
sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
