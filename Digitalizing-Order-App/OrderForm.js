import React, { useState } from 'react';
import '../index.css';

function OrderForm({ onSubmit }) {
  const [orderId, setOrderId] = useState('');
  const [dish, setDish] = useState('');
  const [price, setPrice] = useState('');
  const [table, setTable] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ orderId, dish, price, table });
    setOrderId('');
    setDish('');
    setPrice('');
    setTable('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input
          type="text"
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
        />
      </label>
      <br />
      <label>
        Choose Dish:
        <input
          type="text"
          value={dish}
          onChange={(event) => setDish(event.target.value)}
        />
      </label>
      <br />
      <label>
        Choose Price:
        <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Choose Table:
        <select value={table} onChange={(event) => setTable(event.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default OrderForm;