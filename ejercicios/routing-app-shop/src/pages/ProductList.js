import React, { useState } from "react";
import products from "../mocks/products.json"
import Product from "../components/Product";

// Componente principal que maneja la lista de productos y el carrito
export default function ProductList() {
  const [productList, setproductList] = useState({products});
  const [cart, setCart] = useState([]);
  console.log(productList.products)

  const handleAddToproductList = (products) => {
    setCart([...productList.products, products]);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {productList.products.map((products) => (
          <Product
            key={products.id}
            product={products}
            onAddToproductList={handleAddToproductList}
          />
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