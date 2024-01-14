import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = ({ cart, handleClearCart, children }) => {
  // console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    // or
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping += product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const totalTax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + totalTax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Selected Items: {quantity}</h4>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax (5%): ${totalTax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <button onClick={handleClearCart} className="btn-clear-cart">
        Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      {children}
    </div>
  );
};
export default Cart;
