import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter((product) => product.id !== id);
    setCart(remainingItems);
    removeFromDb(id);
    console.log(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="products-page">
      <div className="order-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
