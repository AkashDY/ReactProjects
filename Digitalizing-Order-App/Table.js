import '../index.css';

function Table({ tableData, onDelete }) {
  return (
    <div className='table'>
      {Object.entries(tableData).map(([table, data]) => (
        <>
          <h2>{table}</h2>
          {data.map((item, index) => (
            <div key={item.orderId}>
              Order ID: {item.orderId} | Dish: {item.dish} | Price: {item.price}
              <button onClick={() => onDelete(table, index)}>Delete</button>
            </div>
          ))}
        </>
      ))}
    </div>
  );
}

export default Table;