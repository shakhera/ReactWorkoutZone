import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleToCard={handleToCard}
            ></Product>
          ))}
        </div>
        <div className="order-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;