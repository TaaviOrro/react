import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {

  const expenses = props.expenses || [];
  return(
    <Card className="expenses">
            {expenses.map((expense, index) => (
        <ExpenseItem key={index} expenseData={expense} />
      ))}
    </Card>
  )
}


export default Expenses;
