import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

const App = () => {
  const [expenses, setExpenses] = useState ([
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99
    },
  ]);

  const AddExpenseHandler = (expense) => {
    console.log('In App.jsx')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={AddExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
