import react from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
  console.log(props)

  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  )
}

export default Expenses;
