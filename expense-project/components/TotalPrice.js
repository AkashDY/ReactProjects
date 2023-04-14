function TotalPrice({ products }) {
    const totalPrice = products.reduce((total, product) => total + parseFloat(product.price), 0);
  
    return (
      <div>
        <p>Total Price: {totalPrice}</p>
      </div>
    );
  }

  export default TotalPrice;