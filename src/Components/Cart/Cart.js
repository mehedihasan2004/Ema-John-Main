import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  // console.log(cart);
  // const price = (privious, current) => privious + current.price;
  // const newPrice = cart.reduce(price, 0);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // console.log(product);
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Added Items In Cart</h2>
      <h4>Selected Items : {quantity}</h4>
      <h4>Total Price: ${totalPrice}</h4>
      <h4>Total Shipping Charge: ${totalShipping}</h4>
      <h4>Tax: ${tax}</h4>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      {/* <button onClick={clearCart}>Clear Cart</button> */}
      {children}
    </div>
  );
};

export default Cart;
