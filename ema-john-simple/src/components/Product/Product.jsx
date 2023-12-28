import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { name, img, price, ratings, seller } = props.product;
  const handleToCard = props.handleToCard;

  return (
    <div className="card-body">
      <img src={img} alt="" />
      <div className="card-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button onClick={() => handleToCard(props.product)} className="btn-card">
        add To Card <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
