import React, { useState, useEffect } from 'react';
import OrderForm from './components/OrderForm';
import Table from './components/Table';
import './index.css';

function App() {
  const [tableData, setTableData] = useState({ table1: [], table2: [], table3: [] });

  useEffect(() => {
    const storedData = Object.keys(localStorage).reduce((acc, key) => {
      if (key.startsWith('order-')) {
        const data = JSON.parse(localStorage.getItem(key));
        acc[data.table].push(data);
      }
      return acc;
    }, { table1: [], table2: [], table3: [] });
    setTableData(storedData);
  }, []);

  const handleSubmit = (data) => {
    localStorage.setItem(`order-${data.orderId}`, JSON.stringify(data));
    setTableData((prevData) => ({
      ...prevData,
      [data.table]: [...prevData[data.table], data],
    }));
  };

  const handleDelete = (table, index) => {
    const newData = { ...tableData };
    const orderId = newData[table][index].orderId;
    newData[table].splice(index, 1);
    setTableData(newData);
    localStorage.removeItem(`order-${orderId}`);
  };

  return (
    <>
      <OrderForm onSubmit={handleSubmit} />
      <Table tableData={tableData} onDelete={handleDelete} />
    </>
  );
}

export default App;
