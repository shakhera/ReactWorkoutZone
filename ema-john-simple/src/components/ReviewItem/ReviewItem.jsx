import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  // console.log(product);
  const { img, price, quantity, name, id } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <h6 className="product-title">{name}</h6>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button
        className="btn-delete"
        onClick={() => {
          handleRemoveFromCart(id);
        }}
      >
        <FontAwesomeIcon
          className="icon-trash"
          icon={faTrashCan}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ReviewItem;
