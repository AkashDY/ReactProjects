import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //one intial variable & second to change state
  const [amount, setAmount] = useState(props.amount);
  // delete expense
  const deleteHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  }

  // update expense
  const clickHandler = () =>{
    setTitle('Updated');
    console.log(title);
  }
  // update amount
  const amountHandler = () =>{
    setAmount('100');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
      <button onClick={amountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;