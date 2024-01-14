import React, { useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";

const Home = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const newCart = [...cart, tShirt];
    setCart(newCart);
  };

  const handleRemoveFromCart = (_id) => {
    const remainig = cart.filter((ts) => ts._id !== _id);
    setCart(remainig);
  };

  return (
    <div className="home-container">
      <div className="product-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
