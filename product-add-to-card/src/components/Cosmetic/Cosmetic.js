import React from "react";
import "./Cosmetic.css";
import { addToCard, removeToCard } from "../../utilities/FakeDb/FakeDb";
const Cosmetic = (props) => {
  const { id, name, picture, price } = props.cosmetic;

  return (
    <div className="cosmetic">
      <h3>Buy this: {name}</h3>
      <img src={picture} alt="" />
      <p>Only for: ${price}</p>
      <h4>Product Id: {id}</h4>
      <button onClick={() => addToCard(id)}>addToCard</button>
      <button onClick={() => removeToCard(id)}>removeFromCard</button>
    </div>
  );
};

export default Cosmetic;
