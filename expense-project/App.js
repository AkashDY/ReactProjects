import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import useLocalStorage from './components/useLocalStorage';

function App() {
  const [products, setProducts] = useLocalStorage('products',[]);

  function handleAddProduct(product) {
    // setProducts([...products, product]);
    // setProducts({
    //   ...products,
    //   [product.productId]: product
    // });
    const newProducts = { ...products, [product.productId]: product };
      setProducts(newProducts);
      localStorage.setItem(product.productId, JSON.stringify(product));
  }

  function handleDeleteProduct(product) {
    // setProducts(products.filter(p => p !== product));
    const newProducts = { ...products };
    delete newProducts[product.productId];
    setProducts(newProducts);
    localStorage.removeItem(product.productId);
  }

  return (
    <div className="App">
      <ProductForm onSubmit={handleAddProduct} /><br />
      <ProductList products={Object.values(products)} onDelete={handleDeleteProduct} />
    </div>
  );
}

export default App;