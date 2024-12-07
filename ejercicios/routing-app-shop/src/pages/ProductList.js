import React, { useState } from "react";
import products from "../mocks/products.json"
import Product from "../components/Product";

// Componente principal que maneja la lista de productos y el carrito
export default function ProductList() {
  const [cart, setCart] = useState([])

  const handleAddToproductList = (addCart) => {
    if (cart.find(prod => prod === addCart))
      console.log('Ya se encuentra', addCart.title, ' en el carrito')
    setCart([...cart, addCart])

  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((products) => (
          <>
            <Product
              key={products.id}
              product={products}
              onAddToproductList={handleAddToproductList}
            />
          </>
        ))}
      </div>

      <h2>Carrito</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}