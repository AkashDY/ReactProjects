import { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [productId, setProductId] = useState('');
  const [price, setPrice] = useState('');
  const [productName, setProductName] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ productId, price, productName,});
    setProductId('');
    setPrice('');
    setProductName('');
  }

  return (
    <form onSubmit={handleSubmit} className='product-form'>
    <div className='input-group'>
      <label htmlFor="productId" className='label'>Product ID : </label>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={event => setProductId(event.target.value)}
        className='input'
      />
    </div>
    <div className='input-group'>
      <label htmlFor="productId" className='label'>Price : </label>
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={event => setPrice(event.target.value)}
        className='input'
      />
    </div>
    <div className='input-group'>
      <label htmlFor="productId" className='label'>Product Name : </label>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={event => setProductName(event.target.value)}
        className='input'
      />
    </div>
      <button type="submit" className='submit-button'>Add Product</button>
    </form>
  );
}

export default ProductForm;