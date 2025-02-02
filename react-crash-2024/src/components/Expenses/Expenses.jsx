import react from 'react'
import ExpenseItem from './Expenses/ExpenseItem';
import Card from "../UI/Card"
import './Expenses.css'

const Expenses = (props) => {

  return(
    <Card className="expenses">
      <ExpenseItem data={props.expenses[0]}/>
      <ExpenseItem data={props.expenses[0]}/>
    </Card>
  )
}


export default Expenses;
