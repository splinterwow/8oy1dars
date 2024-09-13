import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';

function Products({ cartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(data.data)) {
      setProducts(data.data);
    } else {
      console.error("Data is not an array:", data.data);
    }
  }, []);

  return (
    <div className="mx-auto container products-container">
      <div className='ml-16'>
      <h1>Products</h1>
      <div className="cart">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="cart-item border p-4 m-2 rounded shadow">
              <h2 className="text-lg font-bold">{product.brand} {product.model}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Features: {product.features.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <h2 className="mt-6">Cart Items</h2>
      <div className="cart">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item border p-4 m-2 rounded shadow">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">Age: {item.age}</p>
              <p className="text-gray-600">Nation: {item.nation}</p>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default Products;