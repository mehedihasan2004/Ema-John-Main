import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Selected Items : {cart.length}</h4>
      <h4>Total Price: $</h4>
      <h4>Total Shipping Charge: $</h4>
      <h4>Tax: $</h4>
      <h3>Grand Total: 4</h3>
    </div>
  );
};

export default Cart;
