import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  // const cart = props.cart;
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping += product.shipping;
  }
  const totalTax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + totalTax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Selected Items: {cart.length}</h4>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax (5%): ${totalTax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};
export default Cart;
