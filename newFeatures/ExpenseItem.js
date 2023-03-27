import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  }

  const clickHandler = () =>{
    console.log('hello')
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
    </Card>
  );
}

export default ExpenseItem;