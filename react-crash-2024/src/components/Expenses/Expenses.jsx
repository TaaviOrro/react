import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter.jsx';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filteredChangeHandler = (selectedYear) => {
    console.log('Expenses.js sees valitud aasta:', selectedYear);
    setFilteredYear(selectedYear);
  };

  // Veendume, et expenses on massiiv, kui mitte, siis määrame tühja massiivi
  const expenses = Array.isArray(props.expenses) ? props.expenses : [];

  // Filtreerime kulud vastavalt valitud aastale
  const filteredExpenses = expenses.filter((expense) => 
    expense.date instanceof Date && expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      {/* Filtri komponent, mis võimaldab aasta valimist */}
      <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />

      {/* Kui filtreeritud kulusid pole, kuvame teate */}
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for {filteredYear}.</p>
      ) : (
        filteredExpenses.map((expense, index) => (
          <ExpenseItem key={index} expenseData={expense} />
        ))
      )}
    </Card>
  );
};

export default Expenses;
