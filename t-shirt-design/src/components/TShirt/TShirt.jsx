import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { picture, price, name } = tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
      </div>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
