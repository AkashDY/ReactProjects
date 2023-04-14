import TotalPrice from "./TotalPrice";
import './ProductList.css'

function ProductList({ products, onDelete }) {
    function handleDeleteClick(product) {
        onDelete(product);
    }


    return (
      <div className="product-list">
      <h2>Product Items :</h2>
      <ul>
        {products.map(product => (
          <li key={product.productId}>
            <span>{product.productId}</span>
            <span>{product.price}</span>
            <span>{product.productName}</span>
            <button onClick={() => handleDeleteClick(product)}>  Delete</button>
          </li>
          
        ))}
      </ul>
      <h2>TOTAL :</h2>
      <TotalPrice products={products}/>
      </div>
    );
  }
  
  export default ProductList;